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
    appointmentDate: "28-08-2020 09:30:26.123+07:00",
    time: "8:00",
    subject: "Gumm Bleeding",
    status: "approved",
    phone: "+254703130580",
  },
  {
    appointmentDate: "20-02-2020 09:30:26.123+07:00",
    time: "8:00",
    subject: "Health Checkup",
    status: "declined",
    phone: "+254703130580",
  },
  {
    appointmentDate: "5-09-2020 09:30:26.123+07:00",
    time: "13:30",
    subject: "Blood Pressure",
    status: "pending",
    phone: "+254703130580",
  },
];

module.exports = {
  appointments: appointments,
  patientAppointments: patientAppointments,
};
