var mongoose = require('mongoose');

module.exports.modelSchema = mongoose.Schema({
	user: String,
	status: Number
});
