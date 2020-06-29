const clinicalHistory = {
  myPatientVisit: [
    {
      id: 1,
      dateCreated: "5-01-2020 09:30:26.123+07:00",
      chiefComplains: "Head Ache",
      labs: 1,
      drugs: 1,
      hospitalAttended: 1,
      attendingDoctor: 1,
    },
    {
      id: 2,
      dateCreated: "5-01-2020 09:30:26.123+07:00",
      chiefComplains: "Head Ache",
      labs: 2,
      drugs: 2,
      hospitalAttended: 2,
      attendingDoctor: 2,
    },
  ],
};

const labTestResults = {
  myLabTestResult: [
    { id: 1, results: "positive" },
    { id: 2, results: "negative" },
  ],
};

module.exports = {
  clinicalHistory: clinicalHistory,
  labTestResults: labTestResults,
};
