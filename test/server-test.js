const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

// Syntax of Chai - should
const should = chai.should();
const expect = chai.expect;

// Make HTTP requests using chai
chai.use(chaiHttp);


describe('Musico React', function() {

	// We need to activate runServer before our thest run. 
	// In order to avoid race condition that our test might 
	// start running before the server has started, we need
	// return a promise here. So that why we use return runServer()
	before(function() {
		return runServer();
	});

	// We need to close our server after this test is finished.
	// Otherwise, it may cause some error if we add another test
	// module that has 'before' block.
	after(function() {
		return closeServer();
	});

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
});