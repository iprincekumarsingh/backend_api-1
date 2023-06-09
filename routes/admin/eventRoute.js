const express = require("express");

const router = express.Router();

const auth = require("../../middlewares/auth");
const rolechecker = require("../../middlewares/roleChecker");

const {
  createEvent,
  updateEvent,
  demodata
} = require("../../controllers/admin/eventController");

router.route("/create-event").post(auth, rolechecker, createEvent);

// demo route for creating events
router.route("/demo/create-event").post(auth, rolechecker, demodata);

module.exports = router;
