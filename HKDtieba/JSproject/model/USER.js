const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    nickname: String,
    password: String,
    headImg: {
        type: String,
        default: 'headportrait.jpg'
    },
    createTime: {
        type: Date,
        default: Date.now
    }
});

const userNodel = mongoose.model('user', userSchema);


module.exports = userNodel;