var mongoose = require('mongoose');

// Author Schema
var AuthorSchema = mongoose.Schema({
author_name: {
		type: String,
		required: true
    },
type: {
		type: String,
		required: true
    },
date: {
    type: Date,
    default: Date.now
    }
})

var Auhtor = module.exports = mongoose.model('Author', AuthorSchema);