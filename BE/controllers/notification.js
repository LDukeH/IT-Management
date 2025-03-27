import Notification from "../models/notification.js";

export const getAllNotification = async (req, res) => {
  try {
    const allNotifications = await Notification.find();
    res.json(allNotifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
