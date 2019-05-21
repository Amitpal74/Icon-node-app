var async = require('async');
const Person = require('../models/Person');

module.exports = {
    getLogin: async (req, callback) => {
        try {
            const person = await Person.findByEmailAndPassword(req.body.email, req.body.password);
            const token = await person.getAuthTokens();
            let data = { person, token }
            callback(null, data);
        } catch (error) {
            console.log("error", error);
            callback(error);
        }
    }
}