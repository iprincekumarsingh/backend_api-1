const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    event_name: {
      type: String,
      required: [true, "Please enter event name"],
      trim: true,
      maxLength: [100, "Event name cannot exceed 100 characters"],
    },
    event_description: {
      type: String,
      required: [true, "Please enter event description"],
      maxLength: [500, "Event description cannot exceed 500 characters"],
    },
    event_cover_img: {
      type: String,
      required: [true, "Please enter event cover image"],
    },
    
    event_slug: {
      type: String,
      required: true,
      unique: true,
    },
    event_createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    event_updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    event_is_active: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);
