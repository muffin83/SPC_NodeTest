const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./api");
const mongoose = require("mongoose");

const app = express();
app.unsubscribe(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", api);
const port = 5000;
app.listen(port, () => console.log(`Server up and running on part ${port}`));

mongoose
  .connect(
    "mongodb+srv://simba:lovelypanda2055@cluster0.ylumt.mongodb.net/db?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));
