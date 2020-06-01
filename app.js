var express = require("express");
var path = require("path");
var indexRouter = require("./routes/index");
const multer = require("multer");
var app = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${__dirname}/uploads`);
  },
  filename: (req, file, callback) => {
    var extention = {
      "image/jpeg": ".jpg",
      "image/png": ".png",
      "image/gif": ".gif",
    };
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
    ) {
      callback(null, file.originalname);
    } else {
      console.log("This file type is not allowed");
    }
  },
});

var upload = multer({ storage: storage }).single("currentFile");

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '')
// })

app.post("/upload", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.end("File is uploaded");
    }
  });
});

app.set("views", path.join(__dirname, "views"));
app.set("view-engine", "ejs");

app.use("/", indexRouter);

var port = 5000;

app.listen(port, () => {
  console.log("Server is running.");
});

module.exports = app;
