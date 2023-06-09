const express = require("express");

const router = express.Router();

const auth = require("../../middlewares/auth");
const rolechecker = require("../../middlewares/roleChecker");

const {
  createTicket,
  demodata,
} = require("../../controllers/admin/TicketController");

router.route("/ticket/:event_id").post(createTicket);

router.route("/demodata").post(auth, rolechecker, demodata);

module.exports = router;
