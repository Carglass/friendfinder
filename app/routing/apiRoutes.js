let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

module.exports = app => {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
    // connect to mysql, do query
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    console.log(newFriend);
  });
};
