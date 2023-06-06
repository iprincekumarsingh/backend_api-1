const jwt = require("jsonwebtoken");
const User = require("../models/User");

const roleChecker = async (req, res, next) => {
  let token =
    req.header("Authorization") ||
    req.cookies.token ||
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];

  if (!token) {
    return res.status(401).send({ error: "Please authenticate." });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7);
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);

    if (!data) {
      return res.status(401).send({ error: "Please authenticate." });
    }

    // Check role in token data
    if (data.role !== "admin") {
      return res.status(401).send({ error: "Not authorized." });
    }

    req.user = await User.findById(data._id);
    next();
  } catch (error) {
    return res.status(401).send({ error: "Invalid token." });
  }
};

module.exports = roleChecker;
