const express = require("express");
const app = express();

require("dotenv").config();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// api prefix
const api_prefix = "/api/v1";
const admin_prefix = "/api/v1/admin";

// routes import

const home = require("./routes/home");
const auth = require("./routes/authRoute");

// ##ADMIN ROUTES
const category = require("./routes/admin/categoryRoute");
const eventAdmin = require("./routes/admin/eventRoute");

// routes
app.use("/", home);

// auth routes
app.use(`${api_prefix}/auth`, auth);

// ##ADMIN ROUTES

// category routes
app.use(`${admin_prefix}/`, category);
app.use(`${admin_prefix}/event`, eventAdmin);

module.exports = app;
