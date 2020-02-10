const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

app.post("/members", function(req, res) {
  res.sendStatus(200);
});
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://root:password1@ds161008.mlab.com:61008/heroku_55wcg7v0");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
