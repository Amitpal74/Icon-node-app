const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var jwt = require('jsonwebtoken');
require('../utils/common');

const user = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'User Email required'],
        dropDups: true,
        validate: {
            validator: function(v) {
                let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(v);
            },
            message: props => `${props.value} is not a valid Email!`
          },
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

user.statics.findByEmailAndPassword = async function (email, pwd) {
    let User = this;
    try{
    let user = await User.findOne({email});
    if (!user) {
        throw new Error("User invalid")
    }
    if (pwd !== user.password) {
        throw new Error("Password invalid")
    }
    return user;
    }catch(err){
       console.log(err);
    }
}

user.methods.getAuthTokens = async function () {
    const user = this;
    const token = await jwt.sign({ _id: user._id.toString() }, sessionKey);
    user.tokens = user.tokens.concat({ token });
    try{
        user.save();
    }catch(err){
        throw new Error("user saving error");
    }
    
    return token;
}

const User = mongoose.model('User', user);

module.exports = User