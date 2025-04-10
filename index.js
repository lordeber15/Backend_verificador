const app = require("./src/app");
const sequelize = require("./src/database/database");
const port = process.env.DB_PORT || 3000;

async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log("Conexion Exitosa");
    app.listen(port, () => {
      console.log("Escuhando por el puerto", port);
    });
  } catch (error) {
    console.error(
      "Tienes un Error de conexion revisa estos posibles problemas",
      error
    );
  }
}

main();
