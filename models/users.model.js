const { default: mongoose } = require("mongoose");

module.exports = mongoose =>{
    const UserSchema  = new mongoose.Schema({
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: false
        },
        email:{
            type:String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        }
    })
    const User = mongoose.model('User',UserSchema);
    return User;
}