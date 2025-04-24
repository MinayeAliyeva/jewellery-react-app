const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  console.log("user", user);

  const { email, id, isAdmin } = user ?? {};
  console.log("ENV", process.env.ACCESS_SECRET);

  return jwt.sign({ email, id, isAdmin }, process.env.ACCESS_SECRET, {
    expiresIn: "1m",
  });
};

const generateRefreshToken = (user) => {
  const { id, email } = user ?? {};
  return jwt.sign({ id, email }, process.env.REFRESH_SECRET, {
    expiresIn: "2m",
  });
};

const verifyAccessToken = (token) => {
  console.log("token", token);
  console.log("process.env.ACCESS_SECRET", process.env.ACCESS_SECRET);

  return jwt.verify(token, process.env.ACCESS_SECRET);
};

const verifyRefreshToken = (token) =>
  jwt.verify(token, process.env.REFRESH_SECRET);

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
