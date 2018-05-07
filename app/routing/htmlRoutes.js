let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let getHome = (req, res) => {
  res.sendFile(path.join(__dirname, "./../public/home.html"));
};

let getSurvey = (req, res) => {
  res.sendFile(path.join(__dirname, "./../public/survey.html"));
};

let getStyle = (req, res) => {
  res.sendFile(path.join(__dirname, "./../public/style.css"));
};

let getScript = (req, res) => {
  res.sendFile(path.join(__dirname, "./../public/main.js"));
};

module.exports = { getHome, getSurvey, getStyle, getScript };
