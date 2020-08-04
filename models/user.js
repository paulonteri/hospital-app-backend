module.exports = function (sequelize, Sequelize) {
  var User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },

    first_name: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    last_name: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    national_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [8, 8],
      },
    },

    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [12, 13],
      },
    },

    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });

  return User;
};
