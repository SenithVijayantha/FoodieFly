import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token)
    return res.status(401).json({ success: false, message: "Not Authorized" });

  try {
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    req.body.userId = decoded.userId;
    // console.log(req.body);
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};
