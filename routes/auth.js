const express = require('express');
const Users = require('../models/User');
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new Users({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

// router.post('/register' ,function(req,res,next){
//     const salt =  bcrypt.genSalt(10);
//     const hashedPassword = bcrypt.hash(req.body.password, salt);

// //create new user
//     Users.create(req.body).then(function(user){
//         res.send(user);   
//     }).catch(next);     //if error 
// });

//LOGIN
router.post("/login", async (req,res) => {
    try {
        const user = await Users.findOne({ email: req.body.email});
        !user && res.status(404).json("user not found");
       
        const validPassword = await bcrypt.compare(req.body.password , user.password)
        !validPassword && res.status(404).json(" wrong password");

       res.status(200).json(user)
    }catch(err){
        console.log(err);
    }
})

module.exports = router;