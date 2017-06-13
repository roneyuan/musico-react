// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const mongoose = require('mongoose');
// const {app, runServer, closeServer} = require('../server');
// const {TEST_DATABASE_URL} = require('../config');
// const {User} = require('../models/users');
// const {Event} = require('../models/events');
// // Syntax of Chai - should
// const should = chai.should();
// const expect = chai.expect;

// // Make HTTP requests using chai
// chai.use(chaiHttp);

// mongoose.Promise = global.Promise;

// function seedData() {

// 	console.log("Seeding Event Data...")
// 	const data = [];

// 	for (let i = 1; i <= 5; i++) {
// 		data.push(generateEventsCreated());
// 	}

// 	return Event.insertMany(data)
// }

// function generateUsername() {
// 	const username = [
// 		'user1', 'usesr2', 'user3', 'user4', 'user5'];
// 	return Math.floor(Math.random() * 1000000);
// }

// function generatePassword() {
// 	const password = ['123', '321', '567'];
// 	return password[Math.floor(Math.random() * password.length)]
// }

// function generateNickname() {
// 	const nickname = [
// 		'David', 'Owen', 'Peter', 'Joe', 'Kevin'];
// 	return nickname[Math.floor(Math.random() * nickname.length)];
// }

// function generateEventName() {
// 	const name = ["Event 1", "Event 2", "Event 3", "Event 4", "Event 5"];
// 	return name[Math.floor(Math.random() * name.length)];
// }

// function generateEventLocation() {
// 	const location = ["NY", "NJ", "MA"];
// 	return location[Math.floor(Math.random() * location.length)];
// }

// function generateEventTime() {
// 	const time = ["2017/1/1", "2017/2/1", "2017/3/1", "2017/4/1", "2017/5/1"];
// 	return time[Math.floor(Math.random() * time.length)];	
// }

// function generateEventPrice() {
// 	const price = [0, 1, 2, 3, 4, 5];
// 	return price[Math.floor(Math.random() * price.length)];	
// }

// function generateEventTag() {
// 	const tag = ["Piano", "Violin", "Saxophone"];
// 	return tag[Math.floor(Math.random() * tag.length)];	
// }

// function generateEventDescription() {

// }

// // function generateEventName() {

// // }

// function generateEventsCreated() {
// 	return {
// 		name: generateEventName(),
// 		location: generateEventLocation(),
// 		time: generateEventTime(),
// 		price: generateEventPrice(),
// 		tag: generateEventTag(),
// 		description: generateEventDescription()
// 	}
// }

// function generateEventsRsvp() {

// }

// function generateData() {
// 	return {
// 		username: generateUsername(),
// 		password: generatePassword(),
// 		nickname: generateNickname(),
// 		eventsCreated: generateEventsCreated(),
// 		eventsRsvp: generateEventsRsvp()
// 	}
// }

// function tearDownDb() {
// 	console.warn("Deleting test database");
// 	return mongoose.connection.dropDatabase();
// }

// describe('Musico React Server Test', function() {

// 	// We need to activate runServer before our thest run. 
// 	// In order to avoid race condition that our test might 
// 	// start running before the server has started, we need
// 	// return a promise here. So that why we use return runServer()
// 	before(function() {
// 		return runServer(TEST_DATABASE_URL);
// 	});

// 	beforeEach(function() {
// 		return seedData();
// 	})

// 	afterEach(function() {
// 		return tearDownDb();
// 	})

// 	// We need to close our server after this test is finished.
// 	// Otherwise, it may cause some error if we add another test
// 	// module that has 'before' block.
// 	after(function() {
// 		return closeServer();
// 	});


// 	describe('GET endpoint', function() {
// 		it('should go to index page', function() {
// 			return chai.request(app)
// 				.get('/')
// 				.then(function(res) {
// 					// Current version of Chai treat 301 as an error and 
// 					// will return 200 as response
// 					// https://github.com/chaijs/chai-http/issues/10
// 					res.should.have.status(200);
// 				});
// 		});

// 		it('should return list of events', function() {
// 			let res;
// 			return chai.request(app)
// 				.get('/event/all')
// 				.then(function(_res) {
// 					res = _res;
// 					res.should.have.status(200);
// 					res.body.should.have.length.of.at.least(1);
// 					return Event.count();
// 				})
// 				.then(function(count) {
// 					res.body.should.have.length.of(count);
// 				});
// 		});

// 		// it('should return list of users', function() {
// 		// 	let users;
// 		// 	return chai.request(app)
// 		// 		.get('/user/allUser')
// 		// 		.then(function(_users) {
// 		// 			users = _users;
// 		// 			// Get all users
// 		// 			res.should.have.status(200);
// 		// 			res.body.users.should.have.length.of.at.least(1);
// 		// 			return User.count();
// 		// 		})
// 		// 		.then(function(count) {
// 		// 			res.body.users.should.have.length.of(count);
// 		// 		})
// 		// });		
// 	});

// 	describe('POST endpoint', function() {
// 		it('should create an user', function() {

// 		});

// 		it('should post an event', function() {

// 		});
// 	});

// 	describe('PUT endpoint', function() {
// 		it('should rsvp an event', function() {

// 		});	
// 	});
// });