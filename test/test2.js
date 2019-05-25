var assert = require('assert');

var expect = require('chai').expect;

describe('Tests', function() {
	describe('Tests numbers', function() {
		it('should check numbers', function() {
			const bar = 'bar';
			expect(bar).to.be.a('string');

			var answer = 42;

			// AssertionError: expected 43 to equal 42.
			expect(answer).to.equal(42);

			// AssertionError: topic [answer]: expected 43 to equal 42.
			expect(answer, 'topic [answer]').to.equal(42);
		});
	});
});

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});
