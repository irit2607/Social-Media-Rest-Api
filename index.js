const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
 const mongoose = require('mongoose');
 const url = require('./config/mongokey');
 const multer = require("multer");
// const Ninja = require('./models/ninja');
const app = express();
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const path = require("path");
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
    
  });

dotenv.config();

//connect to mongo
 mongoose.connect(url, { useNewUrlParser :true, useUnifiedTopology :true, useFindAndModify: false, useCreateIndex : true, }).then(() => console.log("Connected !"),);
// mongoose.Promise = global.Promise;
// app.use(express.static('public'));

 app.use("/api/user", userRoutes);
 app.use("/api/auth", authRoutes);
 app.use("/api/post", postRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Started on PORT : " + PORT,),);
