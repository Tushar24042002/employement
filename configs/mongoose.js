const mongoose = require("mongoose");

// here we connect the odm(object document maper) mongoose to the dbms mongodb.
mongoose.connect("mongodb+srv://tushargupta24042002:Tushar24042002@cluster0.xoo7rki.mongodb.net/employemnt?retryWrites=true&w=majority", 
// mongoose.connect("mongodb://localhost/employee-review",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
