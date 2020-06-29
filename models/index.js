const doctors = require("./doctors");
const location = require("./location");
const hospitals = require("./hospitals");
const appointments = require("./appointments");

const data = {
  myAppointments: appointments.patientAppointments,
  myDoctor: doctors.doctors.myDoctors,
  myCountry: location.counties.mCounty,
  mySpecialization: doctors.specialization.mSpecialization,
  myHospital: hospitals.hospitals.mHospital,
};

module.exports = { data: data };
