var async = require('async');
const Person = require('../models/Person');

module.exports = {
    saveUser: async (req, callback) => {
        try {
            const person = new Person(req.body);
            await person.save();
            const token = await person.getAuthTokens();
            callback(null, {person,token});
        } catch (error) {
            console.log("error", error);
            callback(error);
        }
    }
}