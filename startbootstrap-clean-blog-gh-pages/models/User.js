const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String
}); 
const User = mongoose.model('User', UserSchema);

module.exports = User;