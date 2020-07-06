module.exports = function (sequelize, Sequelize) {
  var Users = sequelize.define("Users", {
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

    username: {
      type: Sequelize.TEXT,
      unique: true,
      allowNull: false,
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

    last_login: {
      type: Sequelize.DATE,
    },

    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
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

  return Users;
};
