var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
original_url: String,
short_url: {type: String, index: { unique: true }},
createdAt : {type: Date, default: Date.now}
});

module.exports = mongoose.model('Url', UrlSchema);