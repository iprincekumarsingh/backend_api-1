const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    order_amount: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 100,
    },
    order_status: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    order_amount: {
      type: Number,
      required: true,
    },
    total_tickets: {
      type: Number,
      required: true,
    },
    order_currency: {
      type: String,
      required: true,
      default: "INR",
    },
    event_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    ticket_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
    },
    ticket_status: {
      type: String,
      required: true,
      default: "0",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
