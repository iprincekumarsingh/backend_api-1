const express = require("express");

const router = express.Router();

// Path: routes/authRoute.js
const { register, login } = require("../controllers/authController");

// Path: routes/authRoute.js

router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
