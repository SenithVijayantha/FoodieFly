import jwt from "jsonwebtoken";

const createJwtToken = (payload, options = {}) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET not set");
  }

  const signOpts = { expiresIn: options.expiresIn || "7d" };
  return jwt.sign(payload, secret, signOpts);
};

export const setAuthCookie = (res, payload, opts = {}) => {
  const token = createJwtToken(payload, { expiresIn: opts.expiresIn });

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: opts.maxAge || 7 * 24 * 60 * 60 * 1000,
    path: "/",
  };

  res.cookie(opts.cookieName || "token", token, cookieOptions);
  return token;
};
