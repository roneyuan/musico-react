const mongoose = require('mongoose');

Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	nickname: {
		type: String,
		require: true
	},
	events: [{
		time: { 
			type: String, 
			require: true
		},
		name: {
			type: String,
			require: true
		},
		description: {
			type: String,
			require: true
		}
	}]
	// Future feature
	// eventsCreated: {
	// 	events: [{type: Schema.Types.ObjectId, ref: 'Event'}]
	// },
	// eventsInterested: {

	// }
});


UserSchema.methods.apiRepr = function() {
	return {
		id: this.id,
		username: this.username,
		nickname: this.nickname,
		events: this.events
	}
}

const User = mongoose.model('User', UserSchema);

module.exports = {User}