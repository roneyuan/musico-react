const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();
const jsonParser = require('body-parser').json();
const {Event} = require('../models/events');
const {User} = require('../models/users');

router.use(jsonParser);
router.use(passport.initialize());

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;


passport.use(new GoogleStrategy({
	clientID: '603515610903-ov1hu4kjoghb028raqlmb2ndd4761re1.apps.googleusercontent.com',
	clientSecret: 'K5NBv_fDAp6YcyZJQfNofxVb',
	callbackURL: '/users/auth/google/callback'
}, function(accessToken, refreshToken, profile, done) {
	return User
		.findOrCreate({
			username: profile.id
		}, 
		{
			password: accessToken,
			nickname: profile.displayName
		}, (err, user) => {
			// Need to find out why use null
			return done(null, user);
		})
}));

passport.use(new BearerStrategy(function(token, done) {
	User.findOne({password: token}, function(err, user) {
		if (err) return done(err);
		// Need to find out why false
		if (!user) return done(null, false);
		// Need to find out how
		return done(null, user, {scope: 'all'});
	});
}));

router.get('/auth/google', passport.authenticate('google', {scope: ['email profile']}));

router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: 'login', session: false}),
	function(req, res) {
		res.redirect('index.html?token=' + req.user.password);
});



// TODO
// User should be able to browse all the events
router.get('/all', (req, res) => {
	// Get all events
	// Return all events here
	// Use MongoDB query to return all events
	return Event
		.find({}, (err, events) => {
			res.status(200).json(events);
		});
});

// router.get('/:eventId', (req, res) => {
// 	return Event
// 		.find({_id: req.params._id}, (err, event) => {
// 			res.status(200).json({
// 				name: event.name,
// 				location: event.location,
// 				time: event.time,
// 				description: event.description,
// 				tag: event.tag,
// 				price: event.price
// 			})
// 		})
// })

// TODO put passport.authenticate('bearer', {session: false}) back when production
// User should be able to post an event
router.post('/', (req, res) => {
	// Post a new event
	console.log("POST event requested:", req.body)
	return Event
		.create({
			name: req.body.name,
			location: req.body.location,
			time: req.body.time,
			description: req.body.description,
			tag: req.body.tag,
			price: req.body.price
		})
		.then(event => {
			// Chain to the user
			return User
				.findOneAndUpdate({username: req.body.username}, // Production using req.user.username
				{
					$push: {
						'eventsCreated': event._id
					}
				})
				.exec() // Need to know what happen if no exec()
				.then(user => {
					res.status(201).json(event); // user?
				})
				.catch(err => {
					/* istanbul ignore next */
					console.log("Error when updating event to the account.", err);
				});
		})
		.catch(err => {
			/* istanbul ignore next */
			console.log("Error when creating an event.", err);
		})
});


// Future Features
// User should be able to update an event
// router.put('/:eventId', passport.authenticate('bearer', {session: false}), (req, res) => {
// 	// 1. Find the event with the given event Id
// 	// 2. Update the event's information
// });
// // User should be able to delete an event
// router.delete('/:eventId', passport.authenticate('bearer', {session: false}), (req, res) => {
// 	// Delete a event with the given eventId
// 	// 1. Find the event
// 	// 2. Delete the event
// });

module.exports = router