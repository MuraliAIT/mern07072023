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
    //Adding a static method "findByEmail" to 'User schema
    UserSchema.statics.findByEmail = function(email){
        return this.findOne({email});
    }
    UserSchema.statics.findByFname = function(firstname){
        return this.findOne({firstname});
    }
    const User = mongoose.model('User',UserSchema);
    return User;
}