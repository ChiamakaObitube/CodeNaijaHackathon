const config = require('../../config');
const mongoose = require('mongoose');
mongoose.connect(process.env.URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../Users/user.model')
};