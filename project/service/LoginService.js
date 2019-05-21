const loginDAOService = require('../dao/LoginDAOService');

module.exports = {
    getLoginService: (req, callback) => {
        loginDAOService.getLogin(req, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }
}