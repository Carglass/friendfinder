let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");

const app = express();
let PORT = 3000;

app.listen(process.env.PORT || PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", htmlRoutes.getHome);
app.get("/survey", htmlRoutes.getSurvey);
app.get("/style.css", htmlRoutes.getStyle);
app.get("/main.js", htmlRoutes.getScript);
