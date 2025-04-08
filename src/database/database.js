const Sequelize = require("sequelize");
const { DB_DEPLOY } = process.env;
console.log(DB_DEPLOY);
const sequelize = new Sequelize(
  "postgresql://yapenotification_user:9we4RfmwD9rM9MqUPBotIXFTOtYims7H@dpg-cvqmtabe5dus73dk94k0-a.oregon-postgres.render.com/yapenotification",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Esto es opcional, dependiendo de la configuración de tu servidor PostgreSQL
      },
    },
  }

  /*"postgres://postgres:123456@localhost:5432/yapenotification"*/
);

module.exports = sequelize;
