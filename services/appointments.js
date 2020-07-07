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

module.exports = { createAppointment: createAppointment };
