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

	console.log("Seeding User Data...")
	const data = [];

	for (let i = 1; i <= 5; i++) {
		data.push(generateData());
	}

	// console.log(data)

	return User.insertMany(data)
}

function generateUsername() {
	const username = [
		'user1', 'usesr2', 'user3', 'user4', 'user5'];
	return username[Math.floor(Math.random() * username.length)];
}

function generatePassword() {
	const password = ['123', '321', '567'];
	return password[Math.floor(Math.random() * password.length)]
}

function generateNickname() {
	const nickname = [
		'David', 'Owen', 'Peter', 'Joe', 'Kevin'];
	return nickname[Math.floor(Math.random() * nickname.length)];
}

function generateEventId() {
	const id = ["123", "321", "567", "765", "678"];
	return id[Math.floor(Math.random() * id.length)];
}

function generateEventsCreated() {
	const created = [];
	for (let i = 1; i <= 5; i++) {
		created.push(generateEventId())
	}

	return created;
}

function generateEventsRsvp() {
	const rsvp = [];
	for (let i = 1; i <= 3; i++) {
		rsvp.push(generateEventId())
	}

	return rsvp;
}

// How to test with schema?
function generateData() {
	return {
		username: generateUsername(),
		password: generatePassword(),
		nickname: generateNickname(),
		eventsCreated: [],//generateEventsCreated(),
		eventsRsvp: []//generateEventsRsvp()
	}
}

function tearDownDb() {
	console.warn("Deleting test database");
	return mongoose.connection.dropDatabase();
}

describe('User Server Test', function() {

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
		it('should return list of users', function() {
			let res;
			return chai.request(app)
				.get('/user/allUser')
				.then(function(_res) {
					res = _res;
					// Get all users
					// console.log(res.body)
					res.should.have.status(200);
					res.body.should.have.length.of.at.least(1);
					return User.count();
				})
				.then(function(count) {
					res.body.should.have.length.of(count);
				})
		});		
	});

	describe('POST endpoint', function() {
		it('should create an user', function() {
			const newUser = generateData();

			return chai.request(app)
				.post('/user/'+newUser.username)
				.send(newUser)
				.then(function(res) {
					res.should.have.status(201);
					res.should.be.json;
					res.body.should.be.a('object');
					res.body.should.include.keys(
						'username', 'password', 'nickname', 'eventsCreated', 'eventsRsvp');
					res.body.username.should.equal(newUser.username);
					res.body.password.should.equal(newUser.password);
					res.body.nickname.should.equal(newUser.nickname);
					// res.body.eventsCreated.should.equal(newUser.eventsCreated);
				})
		});
	});

	describe('PUT endpoint', function() {
		it('should rsvp an event', function() {
			// TEST with schema
		});	
	});
});