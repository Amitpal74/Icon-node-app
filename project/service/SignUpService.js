const signUpDAOService = require('../dao/SignUpDAOService');

module.exports = {
    saveUserService: (req, callback) => {
        signUpDAOService.saveUser(req, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }
}