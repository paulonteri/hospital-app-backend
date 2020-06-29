const doctors = require("./doctors");
const location = require("./location");
const hospitals = require("./hospitals");
const appointments = require("./appointments");
const user = require("./user");

const data = {
  myAppointments: appointments.patientAppointments,
  myDoctor: doctors.doctors.myDoctors,
  myCounty: location.counties.mCounty,
  mySpecialization: doctors.specialization.mSpecialization,
  myHospital: hospitals.hospitals.mHospital,
  myAllergy: user.allergies.myAllergy,
  myChronics: user.chronics.myChronics,
};

module.exports = { data: data };
