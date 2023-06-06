const jwt = require("jsonwebtoken");

const User = require("../models/User");

const auth = async (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];

  if (!token) {
    return res.status(401).send({ error: "Please authenticate." });
  }

  // Check if the token starts with "Bearer "
  if (token.startsWith("Bearer ")) {
    // Remove the "Bearer " prefix
    token = token.slice(7);
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(data._id);
    next();
  } catch (error) {
    return res.status(401).send({ error: "Invalid token." });
  }
};

module.exports = auth;
