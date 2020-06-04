const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('INFO: Database connected.'))
    .catch(err => console.log(err));

module.exports = mongoose;