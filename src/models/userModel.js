const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    fullname: {
        type: String,
    },
    givenName: {
        type: String,
    },
    familyName: {
        type: String,
    },
    photo: {
        type: String,
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    photoUrl: {
        type: String,
    },
    updatedAt: {
        type : Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;