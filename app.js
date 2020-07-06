const express = require("express");
const bodyParser = require("body-parser");
const formidable = require("express-formidable");

// Databse
db = require("./config/database");

const doctors = require("./models/doctors");
const hospitals = require("./models/hospitals");
const location = require("./models/location");
const appointments = require("./models/appointments");
const user = require("./models/user");
const modelsData = require("./models");

const port = 3000;
const formidableMiddleware = formidable({ encoding: "utf-8" });
const app = express();

db.authenticate()
  .then(() =>
    console.log(
      "A connection to the database has been established successfully."
    )
  )
  .catch((err) => console.error("Unable to connect to the database:", err));

app.use(bodyParser.json());
app.listen(port, () =>
  console.log(`Hospital Backend listening at http://localhost:${port}`)
);

app.get("/", (req, res) => res.send("Hi There!"));

app.get("/api/listdoctors", function (req, res) {
  console.log("/api/listdoctors");
  res.json(doctors.doctors);
});

app.get("/api/listcounties", function (req, res) {
  console.log("/api/listcounties");
  res.json(location.counties);
});

app.get("/api/listhospitals/", function (req, res) {
  console.log("/api/listhospitals/");
  res.json(hospitals.hospitals);
});

app.get("/api/listspecialization/", function (req, res) {
  console.log("/api/listspecialization/");
  res.json(doctors.specialization);
});

app.post("/api/appointments/book/", formidableMiddleware, function (req, res) {
  console.log(req.fields);
  res.json(appointments.appointments);
});

app.post("/api/auth/login", formidableMiddleware, function (req, res) {
  console.log(req.fields);
  res.json(user.user);
});

app.post("/api/data", formidableMiddleware, function (req, res) {
  console.log(req.fields);
  res.json(modelsData.data);
});
