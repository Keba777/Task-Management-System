import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .send({ message: "Access Denied. No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).send({ message: "Invalid Token." });
  }
};
