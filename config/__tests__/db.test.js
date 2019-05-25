const connectDB = require('../db');

describe('runs a function', () => {
	test('runs async', () => {
		expect(connectDB()).toBeDefined();
	});
});
