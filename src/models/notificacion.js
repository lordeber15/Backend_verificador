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
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monto: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  codigoseg: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Notificacion };
