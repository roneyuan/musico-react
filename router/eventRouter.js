const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jsonParser = require('body-parser').json();
const {User} = require('../models/users');

router.use(jsonParser);



// TODO
router.get('events', (res, req) {
	// Get all events
	// Return all events here
	// Use MongoDB query to return all events
})

router.put('/event/:eventId', passport.authenticate('bearer', {session: false}), (req, res) => {
	// 1. Find the event with the given event Id
	// 2. Update the event's information
});
router.post('/event', passsport.authenticate('bearer', {session: false}), (req, res) {
	// Post a new event
} );
router.delete('/event/:eventId', passport.authenticate('bearer' {session: false}, (req, res) {
	// Delete a event with the given eventId
	// 1. Find the event
	// 2. Delete the event
}));