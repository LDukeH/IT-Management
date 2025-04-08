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

export const createNotification = async (req, res) => {
  try {
    const newNotification = await Notification.create(req.body);
    res.json(newNotification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteNotification = async (req, res) => {
  try {
    const { notificationID } = req.params;
    const notification = await Notification.findByIdAndDelete(notificationID);
    res.json(notification);
  } catch (error) {
    console.log(error);
  }
};

export const getNotificationByID = async (req, res) => {
  try {
    const { notificationID } = req.params;
    const notification = await Notification.findById(notificationID);
    res.json(notification);
  } catch (error) {
    console.error(error);
  }
};
