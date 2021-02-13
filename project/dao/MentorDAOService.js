var async = require('async');
const Mentor = require('../models/Mentor');

module.exports = {
    saveMentor: async (req) => {
        console.log("req",req.body);
        try {
            let mentorList = await Mentor.find({name:req.body.name});
            console.log("mentorList123",mentorList);
            let mentor = {};
            if(mentorList && mentorList.length > 0){
                mentor = mentorList[0];
                await mentor.updateOne(
                    {
                        tasks : req.body.tasks
                    },{name:req.name}
                );
            }else{
                let mentor = new Mentor(req.body);
                await mentor.save();
            }
            return mentor;
        } catch (error) {
            console.log("error", error);
            callback(error);
        }
    },
    getList: async (req) => {
        try {
            const mentorList = await Mentor.find();
            return mentorList;
        } catch (error) {
            console.log("error", error);
            callback(error);
        }
    },
    getMentor: async (req) => {
        console.log("getmenotr",req);
        try {
            let mentorList = await Mentor.find({name:req.body.name});
            console.log("mentorList",mentorList);
            return mentorList[0];
        } catch (error) {
            console.log("error", error);
            callback(error);
        }
    }
}
