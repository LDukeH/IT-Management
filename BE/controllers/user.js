import user from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUser = async (req, res) => {
  try {
    const allUser = await user.find();
    res.json(allUser);
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const code = req.user.code;
    const foundUser = await user.findOne({ code });
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

    const foundUser = await user.findOne({ code: requestedCode });
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

    const newUser = await user.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req, res) => {
  const { code, password } = req.body;
  const foundUser = await user.findOne({ code });

  if (!foundUser || !bcrypt.compare(password, foundUser.password)) {
    return res.status(401).send("Invalid credentials");
  }

  const token = jwt.sign({ code: foundUser.code }, "secret_key", {
    expiresIn: "1h",
  });
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
