const express = require("express");
const mongoose = require("mongoose");
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static("public"));

//database connect
require("./server/database/database")();

//calling the routes
app.use("/", require("./server/router/router"));

app.listen(port, () => {
  console.log("Server start at http://localhost:" + port);
});
