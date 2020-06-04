//require the library
const mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb://localhost:27017/contact_list_db");

//acquire the connection to check if it is successful or not
const db = mongoose.connection;

//error
db.on("error", function (err) {
  console.log(err.message);
});

//up and running then print the msg
db.once("open", function () {
  console.log("Successfully connected to database");
});
