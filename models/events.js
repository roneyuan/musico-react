const mongoose = require('mongoose');

Schema = mongoose.Schema;

const EventSchema = Schema({
	name : {
		type: String,
		require: true
	},
	location: {
		type: String,
		require: true
	},
	time: {
		type: Date,
		require: true
	},
	price: {
		type: Number,
		default: 0
	} ,
	tag: {
		type: String,
		require: true
	},
	description : {
		type: String
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
	// Future feature
	// image: {
	// 	type: 
	// }
});

EventSchema.methods.apiRepr = function() {
	return {
		id: this.id,
		name: this.name,
		location: this.location,
		time: this.time,
		description: this.description,
		// image: this.image
	}
}

const Event = mongoose.model('Event', EventSchema)

module.exports = {Event}