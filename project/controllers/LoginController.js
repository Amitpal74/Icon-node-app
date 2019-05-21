const LoginService = require('../service/LoginService');


 module.exports.login = async function(req,res) {
    LoginService.getLoginService(req, (err, data) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                success: false,
                err: err,
                message: "Failed to GET Login",
            })
        } else {
            console.log(data);
                res.status(200).json({
                    success: true,
                    message: "Login Successfull!",
                    data: data
                })
           
        }
    });
}
