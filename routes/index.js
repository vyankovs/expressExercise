var express = require("express");
var router = express.Router();

router.get("/contact", function (req, res) {
  res.render("contact.ejs", {
    phone: 434234234,
    address: "Developers Str 21",
    name: "Natalie",
  });
});

router.get("/blog", function (req, res) {
  res.render("blog.ejs", { title: "My blog" });
});

router.get("/", function (req, res) {
  res.render("home.ejs", { title: "Welcome to home page" });
});

module.exports = router;
