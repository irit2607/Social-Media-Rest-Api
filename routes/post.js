const router = require("express").Router();
const Post = require("../models/Post");

// create a post
router.post("/", async (req,res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err) {
        res.status(500).json(err);
    }
});

// //update a post

// router.put("/:id", async (req, res) => {
//     if (req.body.userId === req.params.id ) {
//       try {
//         const post = await Post.findByIdAndUpdate(req.params.id, {
//           $set: req.body,
//         });
//         res.status(200).json("Post has been updated");
//       } catch (err) {
//         return res.status(500).json(err);
//       }
//     } else {
//       return res.status(403).json("You can update only your post!");
//     }
//   });

// //delete post
// router.delete("/:id", async (req, res) => {
//     if (req.body.userId === req.params.id ) {
//       try {
//         await Post.findByIdAndDelete(req.params.id);
//         res.status(200).json("Post has been deleted");
//       } catch (err) {
//         return res.status(500).json(err);
//       }
//     } else {
//       return res.status(403).json("You can delete only your Post!");
//     }
//   });

//update a post

router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("the post has been updated");
      } else {
        res.status(403).json("you can update only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //delete a post
  
  router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        res.status(403).json("you can delete only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;