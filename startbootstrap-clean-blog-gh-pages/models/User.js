const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: String,
    password: String
});
UserSchema.pre('save', function(next){
    console.log(`this is: ${this}`);
    const user = this;
    console.log(`user is: ${user}`);
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        console.log(hash);
        next();
    });
});
const User = mongoose.model('User', UserSchema);

module.exports = User;