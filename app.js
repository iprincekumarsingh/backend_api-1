const express = require("express");
const app = express();
const ejs = require("ejs");
const cors = require("cors");

require("dotenv").config();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// api prefix
const api_prefix = "/api/v1";
const admin_prefix = "/api/v1/admin";

// cors

app.use(cors());

// view engine
app.set("view engine", "ejs");

// routes import

const home = require("./routes/home");
const auth = require("./routes/authRoute");

// ##ADMIN ROUTES
const category = require("./routes/admin/categoryRoute");
const eventAdmin = require("./routes/admin/eventRoute");
const AdminTicket = require("./routes/admin/TicketRoute");

// routes
app.use(`${api_prefix}/event`, home);

// admin ticket routes
app.use(`${admin_prefix}/ticket`, AdminTicket);
// auth routes
app.use(`${api_prefix}/auth`, auth);

// ##ADMIN ROUTES

// category routes
app.use(`${admin_prefix}/`, category);
app.use(`${admin_prefix}/event`, eventAdmin);

// view pages
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/pay", (req, res) => {
  res.render("pay");
});

module.exports = app;
