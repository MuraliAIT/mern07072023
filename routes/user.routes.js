module.exports = (app) =>{
    const users = require('../controllers/user.controller.js');
    var router = require('express').Router();
    // creating a user
    router.post("/",users.create);

    app.use("/api/users",router);
}