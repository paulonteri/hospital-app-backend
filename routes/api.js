const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");

const formidableMiddleware = formidable({ encoding: "utf-8" });

const doctors = require("../models/doctors");
const hospitals = require("../models/hospitals");
const location = require("../models/location");
const appointments = require("../models/appointments");
const user = require("../models/user");
const modelsData = require("../models");

router.get("/listdoctors", function (req, res) {
  console.log("/api/listdoctors");
  res.json(doctors.doctors);
});

router.get("/listcounties", function (req, res) {
  console.log("/api/listcounties");
  res.json(location.counties);
});

router.get("/listhospitals/", function (req, res) {
  console.log("/api/listhospitals/");
  res.json(hospitals.hospitals);
});

router.get("/listspecialization/", function (req, res) {
  console.log("/api/listspecialization/");
  res.json(doctors.specialization);
});

router.post("/appointments/book/", formidableMiddleware, function (req, res) {
  console.log(req.fields);
  res.json(appointments.appointments);
});

router.post("/auth/login", formidableMiddleware, function (req, res) {
  console.log(req.fields);
  res.json(user.user);
});

router.post("/data", formidableMiddleware, function (req, res) {
  console.log(req.fields);
  res.json(modelsData.data);
});

module.exports = router;
