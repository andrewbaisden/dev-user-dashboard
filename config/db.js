const mongoose = require('mongoose');

const env = require('dotenv').config();

const connectDB = async () => {
	try {
		await mongoose.connect(env.parsed.DB_HOST, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
