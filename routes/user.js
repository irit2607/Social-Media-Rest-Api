const express = require('express');
const Users = require('../models/User');
const router = express.Router();
const bcrypt = require("bcrypt");

//update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
          return res.status(500).json(err);
        }
      }
      try {
        const user = await Users.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can update only your account!");
    }
  });
//delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can delete only your account!");
    }
  });

// get a user
//get a user
router.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});


  //follow a user

  router.put("/:id/follow", async(req,res) => {
    if(req.params.id !== req.body.userId)  // here userid will follow id
    {
      try{
        const user = await Users.findById(req.params.id);  // cuurentUSer wants to follow user
        const currentUser = await Users.findById(req.body.userId);
        if(!user.followers.includes(req.body.userId)){   
           await user.updateOne({ $push: { followers: req.body.userId  } });
           
           await currentUser.updateOne({ $push : {followings : req.params.id}});
           res.status(200).json("user has been followed");
        } else {
            res.status(403).json("you already following this user");
        }
      }
      catch(err) {
        res.status(500).json(err);
      }
    }
    else
    {
      res.status(403).json("you can't follow yourself");
    }
  })

  //unfollow

  router.put("/:id/unfollow", async(req,res) => {
    if(req.params.id !== req.body.userId)  // here userid will follow id
    {
      try{
        const user = await Users.findById(req.params.id);  // cuurentUSer wants to follow user
        const currentUser = await Users.findById(req.body.userId);
        if(user.followers.includes(req.body.userId)){   
           await user.updateOne({ $pull: { followers: req.body.userId  } });
           
           await currentUser.updateOne({ $pull : {followings : req.params.id}});
           res.status(200).json("user has been unfollowed");
        } else {
            res.status(403).json("you have been already unfollowed this user");
        }
      }
      catch(err) {
        res.status(500).json(err);
      }
    }
    else
    {
      res.status(403).json("you can't unfollow yourself");
    }
  })

module.exports = router;