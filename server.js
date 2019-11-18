const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

const app = express();

//db config
const db = require("./config/key").mongoURI;

// Connect to MongoDB
mongoose.connect(db).then(() => {
  console.log("mongo db connected");
});
//   .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world!!");
});

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000; //deploy on heroku

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
