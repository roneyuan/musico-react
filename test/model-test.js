const chai = require('chai');
const mongoose = require('mongoose');
const shoud = chai.shoud();
const {TEST_DATABASE_URL} = require('../config');

mongoose.Promise = global.Promise;

describe('Create an event', function() {
	before(function() {
		return connectDB();
	})

	afterEach(function() {
		return tearDownDB();
	})

	after(function() {
		return closeDB();
	})

	describe('An event', function() {
		it('should return an event object', function() {
			// TODO 
		})
	})
});

function tearDownDB() {
	return mongoose.connection.dropDatabase();
}

function connectDB() {
	return mongoose.connect(TEST_DATABASE_URL);
}

function closeDB() {
	return mongoose.disconnect();
}