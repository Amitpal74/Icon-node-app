const SignUpService = require('../service/SignUpService');


 module.exports.saveUser = async function(req,res) {
    SignUpService.saveUserService(req, (err, data) => {
        if (err) {
            console.log(err);
            res.status(400).json({
                success: false,
                err: err,
                message: "Failed to Save User",
            })
        } else {
                res.status(200).json({
                    success: true,
                    message: "User Registered Successfully!",
                    data: data
                })
           
        }
    });
}



