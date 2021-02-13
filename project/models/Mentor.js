const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
require('../utils/common');

const mentor = new Schema({
    name: {
        type: String
    },
    tasks:[]
});

const Mentor = mongoose.model('Mentor', mentor);

module.exports = Mentor