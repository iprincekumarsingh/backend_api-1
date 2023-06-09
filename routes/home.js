const express = require("express");

const router = express.Router();

const homeController = require("../controllers/homeController");4


const { home, eventByCity, getEvent, getAllEvent } = homeController;

router.route("/").get(home);

// public routes

router.route("/:city").get(eventByCity);

router.route("/view/:id").get(getEvent);

router.route("/event").get(getAllEvent);

module.exports = router;
