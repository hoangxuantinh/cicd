
const express = require("express");
require("dotenv").config();
const app = express();

// route
app.get("/", (req, res) => {
  // Sending This is the home page! in the page
  res
    .status(200)
    .send(`This is the home page and running on tình tính tang tang tính tình`);
});

// Listening to the port 
let PORT = process.env.PORT ? process.env.PORT : 3000;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`Server is running... ahihi`);
});
