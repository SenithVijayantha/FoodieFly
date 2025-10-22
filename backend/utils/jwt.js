import jwt from "jsonwebtoken";

const createJwtToken = (payload, options = {}) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET not set");
  }

  const signOpts = { expiresIn: "7d" };
  return jwt.sign(payload, secret, signOpts);
};

export const setAuthCookie = (res, payload) => {
  const token = createJwtToken(payload, { expiresIn: "7d" });

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" ? true : false,
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/",
  };

  res.cookie("token", token, cookieOptions);
  return token;
};
