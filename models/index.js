const user = require("./user");
const drugs = require("./drugs");
const doctors = require("./doctors");
const location = require("./location");
const hospitals = require("./hospitals");
const appointments = require("./appointments");
const clinicalHistory = require("./clinicalHistory");

const data = {
  myDrug: drugs.drugs.myDrug,
  myAllergy: user.allergies.myAllergy,
  myDoctor: doctors.doctors.myDoctors,
  myCounty: location.counties.mCounty,
  myChronics: user.chronics.myChronics,
  myHospital: hospitals.hospitals.mHospital,
  myAppointments: appointments.patientAppointments,
  mySpecialization: doctors.specialization.mSpecialization,
  myPatientVisit: clinicalHistory.clinicalHistory.myPatientVisit,
  myLabTestType: hospitals.labTestType.myLabTestType,
  myLabTestResult: clinicalHistory.labTestResults.myLabTestResult,
  myVisitType: hospitals.visitType.myVisitType,
};

module.exports = { data: data };
