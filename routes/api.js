const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");

const formidableMiddleware = formidable({ encoding: "utf-8" });

const doctors = require("../dummy_models/doctors");
const hospitals = require("../dummy_models/hospitals");
const location = require("../dummy_models/location");
const appointments = require("../dummy_models/appointments");
const user = require("../dummy_models/user");
const modelsData = require("../dummy_models");

const doctorsService = require("../services/doctors");
const appointmentsService = require("../services/appointments");

router.get("/listdoctors", function (req, res) {
  console.log("/api/listdoctors");
  res.json(doctors.doctors);
});

router.post("/doctors/add", formidableMiddleware, function (req, res) {
  const data = req.fields;
  if (!data.firstName) {
    res.status(422).send("First name is required!");
  }

  if (!data.lastName) {
    res.status(422).send("Last Name is required!");
  }

  doctorsService
    .createDoctor((firstName = data.firstName), (lastName = data.lastName))
    .then((obj) => {
      console.log(obj);
      res.json(appointments.appointments);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Bad Request");
    });
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
  const data = req.fields;

  if (!data.appointmentDate) {
    return res.status(422).send("Appointment date is required!");
  }
  if (!data.visitType) {
    return res.status(422).send("Visit Type is required!");
  }
  if (!data.time) {
    return res.status(422).send("Time is required!");
  }
  if (!data.hospital) {
    return res.status(422).send("Hospital is required!");
  }
  if (!data.action) {
    return res.status(422).send("Action is required!");
  }
  if (!data.county) {
    return res.status(422).send("County is required!");
  }
  if (!data.patient) {
    return res.status(422).send("Patient is required!");
  }
  if (!data.Test) {
    return res.status(422).send("Test is required!");
  }
  if (!data.specialization) {
    return res.status(422).send("Specialization is required!");
  }
  if (!data.status) {
    return res.status(422).send("Status is required!");
  }
  if (!data.doctor) {
    return res.status(422).send("Doctor is required!");
  }
  if (!data.reason) {
    return res.status(422).send("Reason is required!");
  }
  if (!data.subject) {
    return res.status(422).send("Subject is required!");
  }

  const appointmentDate = new Date();
  const hospital = 1;
  const patient = data.patient;
  const doctor = data.doctor;
  const reason = data.reason;
  const subject = data.subject;
  const action = data.action;
  const county = data.county;
  const visitType = data.visitType;
  const time = data.time;
  const Test = data.Test;
  const specialization = data.specialization;
  const status = data.status;

  appointmentsService
    .createAppointment({
      appointment_date: appointmentDate,
      hospitalId: hospital,
      patientId: patient,
      doctorId: doctor,
      // hospitalId: 1,
      // patientId: 1,
      // doctorId: 1,
      reason: reason,
      subject: subject,
      //
      // Test:Test,
      // specialization:specialization,
      // visitType:visitType,
      // time:time,
      // action:action,
      // county:county,
      // status:status
    })
    .then((obj) => {
      console.log(obj);
      appointmentsService
        .getAppointments()
        .then((data) => {
          return res.json(data);
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).send("Bad Request");
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send("Bad Request");
    });
});

router.get("/appointments/list", function (req, res) {
  console.log("/appointmants/list");
  appointmentsService
    .getAppointments()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send("Bad Request");
    });
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
