const db = require('../db');

describe('runs a function', () => {
	it('runs async', () => {
		expect(db.connectDB()).toBeDefined();
	});
});

describe('checks a value', () => {
	it('check dbz', () => {
		expect(db.dragonball.name).toBe('Dragonball Super');
	});
});
