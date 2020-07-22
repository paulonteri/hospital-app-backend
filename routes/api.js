const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");

const formidableMiddleware = formidable({ encoding: "utf-8" });

const doctorsService = require("../services/doctor");
const countiesService = require("../services/county");
const hospitalsService = require("../services/hospital");
const appointmentsService = require("../services/appointment");
const specializationsService = require("../services/specialization");
const specializationGroupsSerice = require("../services/speializationGroup");

router.post("/doctors/list", function (req, res) {
  var data = req.body;
  if (data && data.specialization && data.county) {
    console.log(data.specialization);
    console.log(data.county);
    doctorsService
      .getDoctors()
      .then((data) => res.json({ data: data }))
      .catch((err) => {
        console.log(err);
        res.status(400).send("Bad Request");
      });
  } else {
    res.status(400).send({ Error: "Specialization & County Required" });
  }
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
    .then(() => {
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

router.post("/counties/list", function (req, res) {
  var data = req.body;
  if (data && data.specialization) {
    countiesService
      .getCounties(data.specialization)
      .then((data) => {
        res.json({ data: data });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send("Bad Request");
      });
  } else {
    res.status(400).send({ Error: "Specialization Required" });
  }
});

router.post("/hospitals/list", function (req, res) {
  var data = req.body;
  if (data && data.specialization && data.county) {
    hospitalsService
      .getHospitals(data.specialization, data.county)
      .then((data) => res.json({ data: data }))
      .catch((err) => {
        console.log(err);
        res.status(400).send("Bad Request");
      });
  } else {
    res.status(400).send({ Error: "Specialization & County Required" });
  }
});

router.post("/specializations/sub/list", function (req, res) {
  var data = req.body;
  if (data && data.specialization) {
    specializationsService
      .getSpecializations(data.specialization)
      .then((data) => {
        res.json({ data: data });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send("Bad Request");
      });
  } else {
    res.status(400).send({ Error: "Specialization Group Required" });
  }
});

router.get("/specializations/groups/list", function (req, res) {
  specializationGroupsSerice
    .getSpecializationGroups()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Bad Request");
    });
});

router.post("/appointments/book/", formidableMiddleware, function (req, res) {
  const data = req.fields;
  if (!data.appointmentDate) {
    console.log(data);
    console.log("Appoitment Date required!");
    return res.status(422).send("Appointment date is required!");
  }

  if (!data.hospital) {
    console.log("Hospital required!");
    console.log(data);
    return res.status(422).send("Hospital is required!");
  }
  if (!data.county) {
    console.log("County required!");
    console.log(data);
    return res.status(422).send("County is required!");
  }
  if (!data.patient) {
    console.log("Patient required!");
    console.log(data);
    return res.status(422).send("Patient is required!");
  }
  if (!data.specialization) {
    console.log("Specialization required!");
    console.log(data);
    return res.status(422).send("Specialization is required!");
  }
  if (!data.doctor) {
    console.log("Doctor required!");
    console.log(data);
    return res.status(422).send("Doctor is required!");
  }
  if (!data.reason) {
    console.log("Reason required!");
    console.log(data);
    return res.status(422).send("Reason is required!");
  }
  if (!data.subject) {
    console.log("Subject required!");
    console.log(data);
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

  const appointmentDate = data.appointmentDate;
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
    .then(() => {
      console.log("Appoitment Added");
      appointmentsService
        .getAppointments()
        .then(() => {
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
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send("Bad Request");
    });
});

router.post("/appointments/list", function (req, res) {
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

router.post("/data", formidableMiddleware, function (req, res) {
  console.log("Dummy Data API");
  console.log(req.fields);
  const modelsData = require("../dummy_models");
  res.json(modelsData.data);
});

module.exports = router;
