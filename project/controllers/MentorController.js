const MentorService = require('../service/MentorService');


 module.exports.saveMentor = async function(req,res) {

    MentorService.saveMentor(req).then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ "msg": "Something went wrong...Please try again" })
        })
}

module.exports.getList = async function(req,res) {

    MentorService.getList(req).then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ "msg": "Something went wrong...Please try again" })
        })
}

module.exports.getMentor = async function(req,res) {

    MentorService.getMentor(req).then((data) => {
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.status(400).send({ "msg": "Something went wrong...Please try again" })
        })
}



