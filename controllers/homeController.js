const Event = require("../models/event");
exports.home = (req, res) => {
  return res.status(200).json({
    message: "Welcome to the home page",
  });
};

// searching all event based on city
exports.eventByCity = async (req, res) => {
  //  searching all event based on city and dont search past event or event that is not active
  const { city } = req.params;
  // convert all city to lowercase
  const city2 = city.toLowerCase();

  const events = await Event.find({
    event_city: { $regex: new RegExp(city2, "i") },
    event_is_active: 1,
  })
    .populate("event_category")
    .populate("event_createdBy", "user_name user_email")
    .sort({ event_start_date: 1 });
  if (events.length > 0) {
    return res.status(200).json({
      status: "success",
      message: "Events found",
      data: events,
    });
  }
  return res.status(404).json({
    status: "error",
    message: "No events found",
  });
};

// getting all event

exports.getAllEvent = async (req, res) => {
  //  searching all event based on city and dont search past event or event that is not active
  const events = await Event.find({
    event_is_active: 1,
    event_start_date: { $gte: new Date() },
  })
    .populate("event_category")
    .populate("event_createdBy", "user_name user_email")
    .sort({ event_start_date: 1 });
  if (events.length > 0) {
    return res.status(200).json({
      status: "success",
      message: "Events found",
      data: events,
    });
  }
  return res.status(404).json({
    status: "error",
    message: "No events found",
  });
};

// particular event
exports.getEvent = async (req, res) => {
  const event = await Event.findOne({
    _id: req.params.id,
    event_is_active: 1,
    // event_start_date: { $gte: new Date() },
  })
    .populate("event_category")
    .populate("event_createdBy", "user_name user_email");
  if (event) {
    return res.status(200).json({
      status: "success",
      message: "Event found",
      data: event,
    });
  }
  return res.status(404).json({
    status: "error",
    message: "Event not found",
  });
};
