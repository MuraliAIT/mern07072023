const db = require("../models");

const User = db.users;

// create and save a new user

exports.create = (req,res) => {
    // validating the field
    if(!req.body.firstname){
        res.status(400).send({message:"Firstname can not be empty"});
    }
    //  save user

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    });

    user
    .save(user)
    .then((data)=>{
        res.send(data);
    })
    .catch((err => {
        res.status(500).send({message: err.message || " Internal server error while creating user"});
    }))
}

