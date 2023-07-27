module.exports = (app) =>{
    const users = require('../controllers/user.controller.js');
    var router = require('express').Router();
    // creating a user
    router.post("/register",users.create);
    // fetch users
    router.get('/getAllUsers',users.findAll);

    // Fetch single user by firstname
    router.get("/getSingleUser",users.findOne);

    // Fect single user by id

    router.get('/:id',users.findoneById);

    // update user
    router.put('/updateUser/:id',users.update)

    //delete user as per the id
    router.delete('/:id',users.delete)

    app.use("/api/users",router);
}