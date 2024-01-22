const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('success');
    } catch (error) {
        console.log(`failure, ${error}`);
    }

};

module.exports = connectDB;
