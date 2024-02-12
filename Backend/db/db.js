const mongoose = require("mongoose");
const db = process.env.MONGODB_URI;
module.exports = mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((then) => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log(e);
  });
