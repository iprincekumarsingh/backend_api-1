const slugify = require("slugify");
const Event = require("../../models/event");
exports.createEvent = async (req, res) => {
  try {
    // easy on-boarding of event

    const { event_name, event_description, event_cover_img } = req.body;

    Event.create({
      event_name,
      event_description,
      event_cover_img,
      event_slug: slugify(event_name),
    })
      .then((event) => {
        res.status(200).json({
          status: "success",
          message: "Event created successfully",
          data: event,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: "error",
          message: "Error creating event",
          error: err,
        });
      });
  } catch (err) {}
};
exports.updateEvent = async (req, res) => {
  const {id}=req.params;  
  
};

exports.deleteEvent = async (req, res) => {};

exports.getEvent = async (req, res) => {};

exports.getAllEvents = async (req, res) => {};

exports.demodata = async (req, res) => {
  const eventData = [
    {
      event_name: "Event 1",
      event_description: "Event 1 description",
      event_cover_img: "https://picsum.photos/200/300",
      event_slug: "event-1",
      event_meta_data: "Event 1 meta data",
      event_createdBy: req.user._id,
      event_category: "647d7fa03a138141a3f0f10b",
      event_city:"Cuttack"
    },
    {
      event_name: "Event 2",

      event_description: "Event 2 description",
      event_cover_img: "https://picsum.photos/200/300",
      event_slug: "event-2",
      event_meta_data: "Event 2 meta data",

      event_createdBy: req.user._id,
      event_category: "647d7fa03a138141a3f0f10c",
      event_city:"Bhubaneswar"
    },
    {
      event_name: "Event 3",
      event_description: "Event 3 description",
      event_cover_img: "https://picsum.photos/200/300",
      event_slug: "event-3",
      event_meta_data: "Event 3 meta data",
      event_category: "647f064ace775c8c50863ff4",
      event_createdBy: req.user._id,
      event_city:"Bhubaneswar"
    },
  ];
  await Event.deleteMany({});
  await Event.insertMany(eventData)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Event created successfully",
        data: eventData,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "error",
        message: "Error creating event",
        error: err,
      });
    });
  // } catch (err) {
  //   return res.status(500).json({
  //     status: "error",
  //     message: "Error creating event",
  //     error: err,
  //   });
  // }
};
