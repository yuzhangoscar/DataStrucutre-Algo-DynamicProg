const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const NoteSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    timeOfCreation: {
        type: Date,
        default: Date.now
    },
    note: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Note', NoteSchema);