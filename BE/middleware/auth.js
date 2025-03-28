import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    console.error("No token provided");
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });
  }
  try {
    const decoded = jwt.verify(token, "secret_key");

    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token Verification Failed:", error.message);
    return res.status(403).json({ message: "Invalid Token" });
  }
};

export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;

  try {
    const decoded = jwt.verify(token, "secret_key");

    const { position } = decoded.position;

    if (position !== "Admin") {
      return res.status(403).json({ message: "Access Denied: Not an Admin" });
    }
    next();
  } catch (error) {
    console.error("Token Verification Failed:", error.message);
  }
};
