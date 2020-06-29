const express = require("express");

var bodyParser = require("body-parser");
let formidable = require("express-formidable");

const doctors = require("./models/doctors");
const hospitals = require("./models/hospitals");
const location = require("./models/location");
const appointments = require("./models/appointments");
const auth = require("./models/auth");
const modelsData = require("./models");

const port = 3000;

const app = express();
app.use(bodyParser.json());

const formidableMiddleware = formidable({ encoding: "utf-8" });

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
  res.json(auth.user);
});

app.post("/api/data", formidableMiddleware, function (req, res) {
  console.log(req.fields);
  res.json(modelsData.data);
});
