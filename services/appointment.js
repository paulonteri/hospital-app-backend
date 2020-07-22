const {
  Appointment,
  User,
  Hospital,
  Doctor,
  County,
  Specialization,
} = require("../models/index");

async function createAppointment(appt) {
  const subject = appt.subject;
  const reason = appt.reason;
  const appointment_date = appt.appointment_date;
  const patientId = appt.patientId;
  const hospitalId = appt.hospitalId;
  const doctorId = appt.doctorId;
  const countyId = appt.countyId;
  const specializationId = appt.specializationId;

  const patient = await User.findByPk(patientId);
  if (patient === null) {
    throw "Invalid Patient";
  }
  const hospital = await Hospital.findByPk(hospitalId);
  if (hospital === null) {
    throw "Invalid Hospital";
  }
  const doctor = await Doctor.findByPk(doctorId);
  if (doctor === null) {
    throw "Invalid Doctor";
  }
  const county = await County.findByPk(countyId);
  if (county === null) {
    throw "Invalid County";
  }
  const specialization = await County.findByPk(specializationId);
  if (specialization === null) {
    throw "Invalid Specialization";
  }

  const obj = await Appointment.create({
    subject: subject,
    reason: reason,
    appointment_date: appointment_date,
    patientId: patientId,
    hospitalId: hospitalId,
    doctorId: doctorId,
    countyId: countyId,
    specializationId: specializationId,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return obj;
}

// TODO:
// async function showAppointmemnts(userId){
async function getAppointments(usrId) {
  console.log(usrId);
  const appointments = await Appointment.findAll({
    where: {
      patientId: usrId,
    },
    raw: true,
  });

  const users = await User.findAll({
    raw: true,
    attributes: ["id", "first_name"],
  });

  const doctors = await Doctor.findAll({
    raw: true,
    attributes: ["id", "firstName", "lastName"],
  });

  const hospitals = await Hospital.findAll({
    raw: true,
    attributes: ["id", "name"],
  });

  const counties = await County.findAll({
    raw: true,
    attributes: ["id", "name"],
  });

  const specializations = await Specialization.findAll({
    raw: true,
    attributes: ["id", "name"],
  });

  const appointment_list = [];

  for (var q of appointments) {
    var patient = users.find((obj) => obj.id == q.patientId);
    var doctor = doctors.find((obj) => obj.id == q.doctorId);
    var hospital = hospitals.find((obj) => obj.id == q.hospitalId);
    var county = counties.find((obj) => obj.id == q.countyId);
    var specialization = specializations.find(
      (obj) => obj.id == q.specializationId
    );

    q.doctor = doctor;
    q.patient = patient;
    q.hospital = hospital;
    q.county = county;
    q.specialization = specialization;
    q.phone = "+254703130580";
    q.time = q["appointment_date"].substr(11, 2) + ":00";
    delete q.patientId;
    delete q.doctorId;
    delete q.hospitalId;
    delete q.specializationId;
    delete q.countyId;
    appointment_list.push(q);
  }
  return appointment_list;
}

module.exports = {
  createAppointment: createAppointment,
  getAppointments: getAppointments,
};
