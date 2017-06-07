const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();
const jsonParser = require('body-parser').json();
const {Event} = require('../models/events');

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
router.get('/all', (res, req) => {
	// Get all events
	// Return all events here
	// Use MongoDB query to return all events
	return Event
		.find({}, (err, events) => {
			res.status(200).json(events);
		});
});

router.put('/:eventId', passport.authenticate('bearer', {session: false}), (req, res) => {
	// 1. Find the event with the given event Id
	// 2. Update the event's information
});
router.post('/', passport.authenticate('bearer', {session: false}), (req, res) => {
	// Post a new event
});
router.delete('/:eventId', passport.authenticate('bearer', {session: false}), (req, res) => {
	// Delete a event with the given eventId
	// 1. Find the event
	// 2. Delete the event
});

module.exports = router