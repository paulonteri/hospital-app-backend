const express = require("express");

var bodyParser = require("body-parser");
let formidable = require("express-formidable");

const doctors = require("./models/doctors");
const hospitals = require("./models/hospitals");
const location = require("./models/location");

const port = 3000;

const app = express();
app.use(bodyParser.json());

const formidableMiddleware = formidable({ encoding: "utf-8" });

app.listen(port, () =>
  console.log(`Hospital Backend listening at http://localhost:${port}`)
);

app.get("/", (req, res) => res.send("Hi There!"));

app.get("/api/listdoctors", function (req, res) {
  console.log("Hit");
  res.json(doctors.doctors);
});

app.get("/api/listcounties", function (req, res) {
  console.log("Hit");
  res.json(location.counties);
});

app.get("/api/listhospitals/", function (req, res) {
  console.log("Hit");
  res.json(hospitals.hospitals);
});

app.get("/api/listspecialization/", function (req, res) {
  console.log("Hit");
  res.json(doctors.specialization);
});

app.post("/api/appointments/book/", formidableMiddleware, function (req, res) {
  console.log(req.fields);
  res.json({
    appointments: [
      {
        result: "OK",
        member_id: "32",
        first_name: "Android",
        last_name: "JSON",
      },
      {
        result: "OK",
        member_id: "32",
        first_name: "Android",
        last_name: "JSON",
      },
      {
        result: "OK",
        member_id: "32",
        first_name: "Android",
        last_name: "JSON",
      },
    ],
  });
});
