import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ success: false });

  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    // console.log(req.user);
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};
