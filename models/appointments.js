const appointments = {
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
};

const patientAppointments = [
  {
    appointmentDate: "28-08-2020",
    time: "8:00",
    subject: "Gumm Bleeding",
    status: "approved",
  },
  {
    appointmentDate: "20-02-2020",
    time: "8:00",
    subject: "Health Checkup",
    status: "declined",
  },
  {
    appointmentDate: "5-09-2020",
    time: "13:30",
    subject: "Bllod Pressure",
    status: "pending",
  },
];

module.exports = {
  appointments: appointments,
  patientAppointments: patientAppointments,
};
