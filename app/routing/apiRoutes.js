let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let friends = require("./../data/friends");

const friendshipScore = (friend1, friend2) => {
  let score = 0;
  for (let i = 0; i < 10; i++) {
    score += Math.abs(friend1.scores[i] - friend2.scores[i]);
  }
  return score;
};

const determineBFF = (friendsArray, user) => {
  let BFF;
  let bestScore = 100000;
  for (friend of friendsArray) {
    if (friendshipScore(friend, user) < bestScore) {
      bestScore = friendshipScore(friend, user);
      BFF = friend;
    }
  }
  return BFF;
};

module.exports = app => {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
    // connect to mysql, do query
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(determineBFF(friends, newFriend).name);
    console.log(newFriend);
    friends.push(newFriend);
    return res.send({ status: "ok" });
  });
};
