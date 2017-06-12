const chai = require('chai');
const mongoose = require('mongoose');
const should = chai.should();
const {TEST_DATABASE_URL} = require('../config');

mongoose.Promise = global.Promise;

describe('User', function() {
	before(function() {
		return connectDB();
	});

	afterEach(function() {
		return tearDownDB();
	});

	after(function() {
		return closeDB();
	});

	describe('Get Info', function() {
		it('should return user info', function() {
			// TODO 
		});
	});

	describe('Get Events', function() {
		it('should return user events', function() {
			// TODO 
		});
	});
});

describe('Event', function() {
	before(function() {
		return connectDB();
	});

	afterEach(function() {
		return tearDownDB();
	});

	after(function() {
		return closeDB();
	});

	describe('Get apiRepr', function() {
		it('should return an event object', function() {
			// TODO 
		});
	});
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