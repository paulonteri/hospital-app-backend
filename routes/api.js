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

const doctorsService = require("../services/doctor");
const hospitalsService = require("../services/hospital");
const appointmentsService = require("../services/appointment");

router.get("/listdoctors", function (req, res) {
  console.log("/api/listdoctors");
  doctorsService
    .getDoctors()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(400).send("Bad Request");
    });
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

      doctorsService
        .getDoctors()
        .then((data) => res.json(data))
        .catch((err) => {
          console.log(err);
          res.status(400).send("Bad Request");
        });
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
  hospitalsService
    .getHospitals()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(400).send("Bad Request");
    });
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

  if (!data.hospital) {
    return res.status(422).send("Hospital is required!");
  }
  if (!data.county) {
    return res.status(422).send("County is required!");
  }
  if (!data.patient) {
    return res.status(422).send("Patient is required!");
  }
  if (!data.specialization) {
    return res.status(422).send("Specialization is required!");
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
  // if (!data.visitType) {
  //   return res.status(422).send("Visit Type is required!");
  // }
  // if (!data.Test) {
  //   return res.status(422).send("Test is required!");
  // }
  // if (!data.action) {
  //   return res.status(422).send("Action is required!");
  // }

  const appointmentDate = new Date();
  const hospital = data.hospital;
  const patient = data.patient;
  const doctor = data.doctor;
  const reason = data.reason;
  const subject = data.subject;
  const specialization = data.specialization;
  const county = data.county;
  // const action = data.action;
  // const visitType = data.visitType;
  // const Test = data.Test;

  appointmentsService
    .createAppointment({
      appointment_date: appointmentDate,
      hospitalId: hospital,
      patientId: patient,
      doctorId: doctor,
      reason: reason,
      subject: subject,
      countyId: county,
      specializationId: specialization,
      //
      // Test:Test,
      // visitType:visitType,
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

router.post("/appointments/list", function (req, res) {
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
