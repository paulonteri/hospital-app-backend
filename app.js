const express = require("express");
const app = express();
const port = 3000;

const doctors = require("./models/doctors");

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Hospital Backend listening at http://localhost:${port}`)
);

app.get("/api/listdoctors", function (req, res) {
  console.log("/api/listdoctors");
  res.json(doctors.doctors);
});
