const faker = require("faker");
faker.locale = "de";

function doctors() {
  docs = [];
  for (i = 0; i <= 20; i++) {
    docs.push({
      id: faker.random.number(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    });
  }
  return { myDoctors: docs };
}

const specializations = [
  { id: 1, specializationName: "Surgery" },
  { id: 2, specializationName: "Oncology" },
  { id: 3, specializationName: "Dermatology" },
];

const specialization = { mSpecialization: specializations };

module.exports = {
  doctors: doctors(),
  specialization: specialization,
};
