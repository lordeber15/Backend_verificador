const { Router } = require("express");
const {
  getNotification,
  createNotification,
} = require("../controllers/notificacion.controller.js");
const router = Router();

router.get("/notification", getNotification);
router.post("/notification", createNotification);

module.exports = router;
