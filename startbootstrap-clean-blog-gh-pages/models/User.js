const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Type in username or die'], 
        unique: true
    },
    password: {
        type: String,
        required: [true, 'type in password or die'],
    }
});
UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    });
});
const User = mongoose.model('User', UserSchema);

module.exports = User;