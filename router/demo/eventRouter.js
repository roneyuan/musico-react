const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const router = express.Router();
const jsonParser = require('body-parser').json();
const {Event} = require('../../models/events');
const {User} = require('../../models/users');

router.use(jsonParser);
router.use(passport.initialize());


router.get('/all', (req, res) => {
	return Event
		.find({}, (err, events) => {
			res.status(200).json(events);
		});
});

router.post('/', (req, res) => {
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
			return User
				.findOneAndUpdate({username: 'demo'},
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


module.exports = router