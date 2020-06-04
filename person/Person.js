const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String
});
mongoose.model('Person', personSchema);

module.exports = mongoose.model('Person');