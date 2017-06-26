const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();
const jsonParser = require('body-parser').json();
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
			// console.log("User created.")
			return done(null, user);
		})
}));


// TODO - Basic Login Strategy



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
		// console.log("Callback from Google")
		res.redirect('index.html?token=' + req.user.password);
});

// RSVP an event
router.put('/:eventId', (req, res) => {
	let event = req.params.eventId;
	console.log(event)
	return User
		.findOneAndUpdate({username: req.body.username}, // Production using req.user.username
		{
			$push: {
				'eventsRsvp': event
			}
		})
		.exec() // Need to know what happen if no exec()
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			/* istanbul ignore next */
			console.log("Error when updating event to the account.", err);
		});				
	// Updated to User event
});


// TEST only
router.post('/:user', (req, res) => {
	return User
		.create({
			username: req.body.username,
			password: req.body.password,
			nickname: req.body.nickname
		})
		.then(user => {
			res.status(201).json(user);
		}
		)
		.catch(err => {
			/* istanbul ignore next */
			console.log("User create error")
		}
		)
});

router.get('/profile/:username', (req, res) => {
	/* istanbul ignore next */
	let username = req.params.username;
	return User
		.findOne({username: username})
		.exec()
		.then(user => {
			res.status(200).json({
				username: user.username,
				nickname: user.nickname,
				eventsRsvp: user.eventsRsvp
			})
		})
		.catch(err => {
			/* istanbul ignore next */
			console.log(err);
		})
})

router.get('/allUser', (req, res) => {
	return User
		.find({})
		.exec()
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => {
			/* istanbul ignore next */
			console.log(err);
		})
});



// Furture features
// // Get the users event. The info will be public so does not need use passport. 
// router.get('/:username', (req, res) => {
// 	// Return the user that corresponds to /:username
// });

// // Update the user's information
// router.put('/:username', passport.authenticate('bearer', {session: false}), (req, res) => {
// 	// Find the user
// });

module.exports = router
