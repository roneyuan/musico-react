const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');
const {User} = require('../models/users');
const {Event} = require('../models/events');
// Syntax of Chai - should
const should = chai.should();
const expect = chai.expect;

// Make HTTP requests using chai
chai.use(chaiHttp);

mongoose.Promise = global.Promise;

function seedData() {
	const data = [];

	for (let i = 1; i <= 5; i++) {
		data.push(generateData());
	}

	return User.insertMany(seedData)
}

function generateUsername() {
	const username = [
		'user1', 'usesr2', 'user3', 'user4', 'user5'];
	return Math.floor(Math.random() * 1000000);
}

function generatePassword() {
	const password = ['123', '321', '567'];
	return password[Math.floor(Math.random() * password.length)]
}

function generateNickname() {
	const nickname = [
		'David', 'Owen', 'Peter', 'Joe', 'Kevin'];
	return nickname[Math.floor(Math.random() * nickname.length)]
}

function generateEventsCreated() {

}

function generateEventsRsvp() {

}

function generateData() {
	return {
		username: generateUsername(),
		password: generatePassword(),
		nickname: generateNickname(),
		eventsCreated: generateEventsCreated(),
		eventsRsvp: generateEventsRsvp()
	}
}

function tearDownDb() {
	console.warn("Deleting test database");
	return mongoose.connection.dropDatabase();
}

describe('Musico React Server Test', function() {

	// We need to activate runServer before our thest run. 
	// In order to avoid race condition that our test might 
	// start running before the server has started, we need
	// return a promise here. So that why we use return runServer()
	before(function() {
		return runServer(TEST_DATABASE_URL);
	});

	beforeEach(function() {
		return seedData();
	})

	afterEach(function() {
		return tearDownDb();
	})

	// We need to close our server after this test is finished.
	// Otherwise, it may cause some error if we add another test
	// module that has 'before' block.
	after(function() {
		return closeServer();
	});


	describe('GET endpoint', function() {
		it('should go to index page', function() {
			return chai.request(app)
				.get('/')
				.then(function(res) {
					// Current version of Chai treat 301 as an error and 
					// will return 200 as response
					// https://github.com/chaijs/chai-http/issues/10
					res.should.have.status(200);
				});
		});

		it('should return list of events', function() {

		});

		it('should return list of users', function() {

		});		
	});

	describe('POST endpoint', function() {
		it('should create an user', function() {

		});

		it('should post an event', function() {

		});
	});

	describe('PUT endpoint', function() {
		it('should rsvp an event', function() {

		});	
	});
});