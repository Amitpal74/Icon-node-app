const mentorDAOService = require('../dao/MentorDAOService');

module.exports = {
    saveMentor: async (req) => {
        try {
            let mentor = await mentorDAOService.saveMentor(req);
            return mentor;
        } catch (error) {
            console.log("error", error);
            callback(error);
        }
    },
    getList: async (req) => {
        try {
            let mentorList = await mentorDAOService.getList(req);
            return mentorList;
        } catch (error) {
            console.log("error", error);
            callback(error);
        }
    },
    getMentor: async (req) => {
        try {
            let mentor = await mentorDAOService.getMentor(req);
            return mentor;
        } catch (error) {
            console.log("error", error);
            callback(error);
        }
    }
}
