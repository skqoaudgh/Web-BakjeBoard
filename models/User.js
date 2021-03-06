const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserID: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Nickname: {
        type: String,
        required: true
    },
    UploadPost: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

module.exports = mongoose.model('User', userSchema);