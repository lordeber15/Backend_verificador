const express = require("express");
const notificationRoutes = require("./routes/notificacion.routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(notificationRoutes);

module.exports = app;
