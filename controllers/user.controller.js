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

// Fetch all the user -  API

exports.findAll = (req, res)=>{
    User.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message || "Error while fetching the data from database!"
        });
    });
}

// Fetch or find single user as per the Firstname

exports.findOne = (req,res)=>{
    const fname = req.body.firstname;
    User.findByFname(fname)
    .then((data)=>{
        if(!data)
            res.status(404).send({message:"User is not found!"})
        else 
            res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:"Error while fetching the user as per the id!"})
    })
}

// fetch a single user with an id
exports.findoneById = (req,res)=>{
    const id = req.params.id;

    User.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:" Record not found!"})
        }else res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:"Error while fetching single record as per the id"})
    })
}

//To update Use by the id in the request
exports.update = (req,res) =>{
    if(!req.body){
        return res.status(400).send({message:" Data to update can't be empty"});
    }

    const id = req.params.id;

    User.findByIdAndUpdate(id,req.body)
    .then((data)=>{
        if(!data){
            res.status(404).send({
                message:" Can't update user,May be the user might not be there in the database"
            });
        }else{
            res.send({message:" User was updated successfully!"})
        }
    })
    .catch((err)=>{
        res.status(500).send({
            message:" Error while updating the user with id"
        })
    })
}

//Delete User as per the id

exports.delete = (req,res) =>{
    const id = req.params.id;
    User.findByIdAndRemove(id)
    .then(data=>{
        if(!data){
            res.status(404).send({
                message:" Can't Delete user,May be the user might not be there in the database"
            });
        }else{
            res.send({message:" User was deleted successfully!"})
        }
    })
    .catch((err)=>{
        res.status(500).send({
            message:" Error while deleting the user with id"
        })
    })
}

