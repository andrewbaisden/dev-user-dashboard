var expect = require('chai').expect;

const db = require('../config/db');

// describe('runs a function', function() {
// 	describe('runs async', function() {
// 		it('should return data', function() {
// 			expect(db.connectDB()).should.be.a('function');
// 		});
// 	});
// });

describe('Tests dragonball', function() {
	describe('Tests object value', function() {
		it('should be a string called Dragonball Super', function() {
			expect(db.dragonball.name).to.equal('Dragonball Super');
		});
	});
});

describe('Tests dragonball', function() {
	describe('Tests object value', function() {
		it('should be a id of 1', function() {
			expect(db.dragonball.id).to.equal(1);
		});
	});
});
