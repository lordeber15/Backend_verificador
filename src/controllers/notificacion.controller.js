const { Notificacion } = require("../models/notificacion");

const getNotification = async (req, res) => {
  try {
    const getNotification = await Notificacion.findAll();
    res.json(getNotification);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createNotification = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNotification = await Notificacion.create({
      title,
      content,
    });
    res.json(newNotification);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getNotification, createNotification };
