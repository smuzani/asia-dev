var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// {id: 1, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1981, pages: 224}
var BookSchema = new Schema({
title: String,
author: String,
year: Number,
pages: Number,
createdAt : {type: Date, default: Date.now}
});

module.exports = mongoose.model('Book', BookSchema);