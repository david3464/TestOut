const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Book Schema
const ItemSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
    },
    publishDate : {
        type: Date,
        required: true
    },
    pageCount : {
        type: Date,
        required: true
    },
    createdAt : {
        type: Date,
        required: true,
        default: Date.now
    },
    coverImageName : {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
    date : {
        type: Date,
        default:Date.now
    }
})
module.exports = Item = mongoose.model('Item', ItemSchema);