var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CourseSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Course', CourseSchema);