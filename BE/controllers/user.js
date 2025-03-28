import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUser = async (req, res) => {
  try {
    const allUser = await User.find();
    res.json(allUser);
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const code = req.user.code;
    const foundUser = await User.findOne({ code });

    res.json(foundUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const findUserByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const requestedCode = code || req.user.code;

    const foundUser = await User.findOne({ code: requestedCode });
    if (!foundUser) {
      return res.status(404).send("User not found");
    }

    if (req.user.role !== "manager" && requestedCode !== req.user.code) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    res.json(foundUser);
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;

    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  const { code, password } = req.body;
  const foundUser = await User.findOne({ code });

  if (!foundUser || !bcrypt.compare(password, foundUser.password)) {
    return res.status(401).send("Invalid credentials");
  }

  const token = jwt.sign(
    { code: foundUser.code, position: foundUser.position },
    "secret_key",
    {
      expiresIn: "1h",
    }
  );
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
    maxAge: 3600000,
  });

  res.json(foundUser);
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json("Logout success");
  } catch (error) {
    console.error(error);
  }
};

export const editUser = async (req, res) => {
  try {
    const updates = req.body;

    if (req.file) {
      updates.image = req.file.path;
    }

    Object.keys(updates).forEach((key) => {
      if (
        updates[key] === "" ||
        updates[key] === null ||
        updates[key] === undefined
      ) {
        delete updates[key];
      }
    });
    const updatedUser = await User.findOneAndUpdate(
      { _id: updates.id },
      updates,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userID } = req.params;

    const user = userID.findByIdAndDelete(userID);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
