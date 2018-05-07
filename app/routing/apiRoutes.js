let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "./../public/home.html"));
};

let getSurvey = (req, res) => {
  res.sendFile(path.join(__dirname, "./../public/survey.html"));
};

module.exports = { getHome, getSurvey };
