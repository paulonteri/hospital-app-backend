const hospitals = {
  mHospital: [
    { id: 1, hospitalName: "Kenyatta Hospital" },
    { id: 2, hospitalName: "Galaxy Medicare" },
    { id: 3, hospitalName: "Karen Hospital" },
  ],
};

const labTestType = {
  myLabTestType: [
    { id: 1, testName: "Malaria Test" },
    { id: 2, testName: "Cholera Test" },
  ],
};

const visitType = {
  myVisitType: [
    { id: 1, name: "Testing" },
    { id: 2, name: "Checkup" },
  ],
};

module.exports = {
  hospitals: hospitals,
  visitType: visitType,
  labTestType: labTestType,
};
