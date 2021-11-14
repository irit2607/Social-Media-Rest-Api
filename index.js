const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
 const mongoose = require('mongoose');
 const url = require('./config/mongokey');
// const Ninja = require('./models/ninja');
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

dotenv.config();

//connect to mongo
 mongoose.connect(url, { useNewUrlParser :true, useUnifiedTopology :true, useFindAndModify: false, useCreateIndex : true, }).then(() => console.log("Connected !"),);
// mongoose.Promise = global.Promise;
// app.use(express.static('public'));

 app.use("/api/user", userRoutes);
 app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Started on PORT : " + PORT,),);
