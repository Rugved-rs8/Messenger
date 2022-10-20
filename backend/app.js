const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
let Post = require('./models/post');



const app = express();

// mongoose.connect("mongodb+srv://rugved:uXxTuToX56bl0pWg@cluster0.kkkwc0k.mongodb.net/?retryWrites=true&w=majority")
//     .then(() => {
//       console.log("Connected to Database!! ");
//     })
//     .catch(() => {
//       console.log("Connection Failed :( ")
//     });

    mongoose.connect("mongodb://localhost:27017/demo")
    .then(() => {
      console.log("Connected to Database!! ");
    })
    .catch(() => {
      console.log("Connection Failed :( ")
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// app.post("/api/posts", (req, res, next) => {

//   // const post = new Post({
//   //   title : req.body.title,
//   //   content : req.body.content
//   // });

//   Post.create(req.body, (error, data) => {
//     if(error) return next(error)
//     else res.json(data)
//   });
//   // console.log(post);
//   res.status(201).json({
//     message: 'Post added successfully'
//   });
// });

app.get("/api/posts", (req, res, next) => {
  Post.find((error, data) => {
    if(error) return next(error)
    else res.json(data)
  })
});

module.exports = app;
