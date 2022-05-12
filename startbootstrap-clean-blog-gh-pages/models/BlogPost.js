const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dataPosted: {
        type:Date,
        default: new Date()
    },
    image:String
}); 
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;