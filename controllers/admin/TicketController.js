const Ticket = require("../../models/ticket");

// creating Ticket for event

exports.createTicket = async (req, res) => {
  // get event id to create ticket

  const { event_id } = use.params;

  const {
    ticket_name,
    ticket_price,
    ticket_quantity,
    ticket_start_date,
    ticket_end_date,
  } = req.body;

  // check if ticket already exist

  const Ticket = await Ticket.create({
    ticket_name,
    ticket_price,
    ticket_quantity,
    ticket_start_date,
    ticket_end_date,
    ticket_event: event_id,
    ticket_createdBy: req.user._id,
  });
};

// demo data for ticket

exports.demodata = async (req, res) => {
  const ticketDemoData = [
    {
      title: "Early Bird",
      description: "Early Bird Ticket",
      ticket_price: 100,
      ticket_quantity: 100,
      ticket_start_date: "2021-05-01",
      ticket_end_date: "2021-05-10",
      ticket_type: "paid",
      ticket_start_time: "10:00",
      ticket_end_time: "12:00",
      ticket_createdBy: req.user._id,
      event_id: "64816f7161e9a5f51bc5a025",
    },
    {
      title: "Regular",
      ticket_price: 200,
      description: "Regular Ticket",
      ticket_quantity: 100,
      ticket_start_date: "2023-05-01",
      ticket_end_date: "2023-11-10",
      ticket_type: "paid",
      ticket_start_time: "12:00",
      ticket_end_time: "10:00",
      event_id: "64816f7161e9a5f51bc5a025",

      ticket_createdBy: req.user._id,
    },
    {
      title: "VIP",
      ticket_price: 500,
      description: "VIP Ticket",
      ticket_quantity: 100,
      ticket_start_date: "2023-05-01",
      ticket_end_date: "2023-11-10",
      ticket_type: "paid",
      ticket_start_time: "10:00",
      ticket_end_time: "12:00",
      event_id: "64816f7161e9a5f51bc5a025",
      ticket_createdBy: req.user._id,
    },
  ];

  await Ticket.deleteMany({});

  await Ticket.insertMany(ticketDemoData);
  return res.status(200).json({
    status: "success",
    message: "Ticket created successfully",
  });
};
