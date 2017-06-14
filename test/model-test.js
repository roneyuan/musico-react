const chai = require('chai');
const mongoose = require('mongoose');
const should = chai.should();
const {TEST_DATABASE_URL} = require('../config');
const {Event} = require('../models/events');

mongoose.Promise = global.Promise;


function seedData() {

	console.log("Seeding Event Data...")
	const data = [];

	for (let i = 1; i <= 5; i++) {
		data.push(generateEvents());
	}

	return Event.insertMany(data)
}

function generateEventName() {
	const name = ["Event 1", "Event 2", "Event 3", "Event 4", "Event 5"];
	return name[Math.floor(Math.random() * name.length)];
}

function generateEventLocation() {
	const location = ["NY", "NJ", "MA"];
	return location[Math.floor(Math.random() * location.length)];
}

function generateEventTime() {
	const time = ["2017/1/1", "2017/2/1", "2017/3/1", "2017/4/1", "2017/5/1"];
	return time[Math.floor(Math.random() * time.length)];	
}

function generateEventPrice() {
	const price = [0, 1, 2, 3, 4, 5];
	return price[Math.floor(Math.random() * price.length)];	
}

function generateEventTag() {
	const tag = ["Piano", "Violin", "Saxophone"];
	return tag[Math.floor(Math.random() * tag.length)];	
}

function generateEventDescription() {
	const description = ["Hello", "World"];
	return description[Math.floor(Math.random() * description.length)];	
}

function generateEvents() {
	return {
		name: generateEventName(),
		location: generateEventLocation(),
		time: generateEventTime(),
		price: generateEventPrice(),
		tag: generateEventTag(),
		description: generateEventDescription()
	}
}

function tearDownDb() {
	console.warn("Deleting test database");
	return mongoose.connection.dropDatabase();
}

xdescribe('User', function() {
	before(function() {
		return runServer(TEST_DATABASE_URL);
	});

	beforeEach(function() {
		return seedData();
	})

	afterEach(function() {
		return tearDownDb();
	})

	after(function() {
		return closeServer();
	});
});

describe('Event', function() {
	before(function() {
		return connectDB();
	});

	beforeEach(function() {
		return seedData();
	})

	afterEach(function() {
		return tearDownDb();
	})

	after(function() {
		return closeDB();
	});

	describe('Get apiRepr', function() {
		it('should return an event object', function() {
			// TODO 

			// Why apiRepr() is not a function???
			// If it is static, then we can use Event directly.
			return Event.findOne({}).exec().then(res => {
				// console.log("APRTEST", res)
				res.apiRepr().should.be.a('object')});
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