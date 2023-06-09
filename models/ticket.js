const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    ticket_type: {
      type: String,
      required: true,
      enum: ["free", "paid"],
      default: "free",
    },
    ticket_price: {
      type: Number,
      default: 0,
    },
    ticket_quantity: {
      type: Number,
      default: 0,
    },
    ticket_sold: {
      type: Number,
      default: 0,
    },

    ticket_start_date: {
      type: Date,
      required: true,
    },
    ticket_end_date: {
      type: Date,
      required: true,
    },
    ticket_start_time: {
      type: String,
      required: true,
    },
    ticket_end_time: {
      type: String,
      required: true,
    },
    ticket_createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    event_id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
