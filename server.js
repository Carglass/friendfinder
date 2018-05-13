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
// allowing the app to access the css and js files from public folder
app.use(express.static(path.join(__dirname, "app/public")));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
