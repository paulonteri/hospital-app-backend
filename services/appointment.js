const { Appointment, User, Hospital, Doctor } = require("../models/index");

async function createAppointment(appt) {
  const subject = appt.subject;
  const reason = appt.reason;
  const appointment_date = appt.appointment_date;
  const patientId = appt.patientId;
  const hospitalId = appt.hospitalId;
  const doctorId = appt.hospitalId;

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

  const obj = await Appointment.create({
    subject: subject,
    reason: reason,
    appointment_date: appointment_date,
    patientId: patientId,
    hospitalId: hospitalId,
    doctorId: doctorId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return obj;
}

// TODO:
// async function showAppointmemnts(userId){
async function getAppointments() {
  const appointments = await Appointment.findAll({ raw: true });
  const users = await User.findAll({ raw: true });
  const doctors = await Doctor.findAll({ raw: true });
  const hospitals = await Hospital.findAll({ raw: true });

  const appointment_list = [];

  for (var q of appointments) {
    var patient = users.find((obj) => obj.id == q.patientId);
    var doctor = doctors.find((obj) => obj.id == q.doctorId);
    var hospital = hospitals.find((obj) => obj.id == q.hospitalId);
    q.doctor = doctor;
    q.patient = patient;
    q.hospital = hospital;
    delete q.patientId;
    delete q.doctorId;
    delete q.hospitalId;
    appointment_list.push(q);
  }
  return appointment_list;
}

module.exports = {
  createAppointment: createAppointment,
  getAppointments: getAppointments,
};
