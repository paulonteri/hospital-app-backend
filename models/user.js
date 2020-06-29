const user = {
  myPatient: {
    email: "onteripaul@gmail.com",
    firstName: "John",
    middleName: "Middle Name",
    lastName: "Doe",
    id: "343434",
    idPassport: 23232323,
  },
};

const allergies = {
  myAllergy: [
    {
      id: 1,
      name: "Pollen Allergy",
      description: "Pollen causes breathing problems",
    },
    {
      id: 2,
      name: "Dust Allergy",
      description: "Dust causes breathing problems",
    },
  ],
};

const chronics = {
  myChronics: [
    {
      id: 1,
      name: "Diabetis",
      description: "Diabetis",
    },
    {
      id: 2,
      name: "High Blood Pressure",
      description: "High Blood Pressure",
    },
  ],
};

module.exports = { user: user, allergies: allergies, chronics: chronics };
