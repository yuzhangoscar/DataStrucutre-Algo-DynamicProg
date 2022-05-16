const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    username: String,
    password: String,
});
const User = mongoose.model('User', BlogPostSchema);

module.exports = User;
