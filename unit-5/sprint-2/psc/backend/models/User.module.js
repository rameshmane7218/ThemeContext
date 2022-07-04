const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    mobile: Number,
    country: String,
    gender: {
        type: String,
        enum: ['Male', 'Female','Unspecified'],
    },

});

const UserModel = mongoose.model('User', UserSchema);


module.exports = UserModel;