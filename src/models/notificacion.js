const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Notificacion = sequelize.define("notificacion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Notificacion };
