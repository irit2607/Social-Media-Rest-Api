const express = require('express');
const Users = require('../models/User');
const router = express.Router();

// router.post('/register' , async(req,res) => {
//     const newUser = new Users({
//       username : req.body.username,
//       email : req.body.email,
//       password : req.body.password,
//     });
//     try{
//         const user = await newUser.save();
//         res.status(200).json(user)
//     } catch(err){
//        console.log(err);
//     }

//   //if error 
// });

router.post('/register' ,function(req,res,next){
    Users.create(req.body).then(function(user){
        res.send(user);   
    }).catch(next);     //if error 
});

module.exports = router;