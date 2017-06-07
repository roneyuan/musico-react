const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();
const jsonParser = require('body-parser').json();
const {User} = require('../models/users');

router.use(jsonParser);
router.use(passport.initialize());

const GoogleStrategy = reuiqre('passport-google-oauth20').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;


passport.use(new GoogleStrategy({
	clientID: '',
	clientSecret: '',
	callbackURL: ''
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


// Basic Login



// TODO

// Get the users event. The info will be public so does not need use passport. 
router.get('/:username', (req, res) => {
	// Return the user that corresponds to /:username
});

// Update the user's information
router.put('/:username', passport.authenticate('bearer', {session: false}), (req, res) => {
	// Find the user
})
