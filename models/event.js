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

    event_meta_data: {
      type: String,
      required: false,
    },

    // create object arrays of images
    event_images: {
      type: Array,
      default: [],
    },
    event_start_date: {
      type: Date,
      required: false,
    },
    event_end_date: {
      type: Date,
      required: false,
    },
    event_start_time: {
      type: String,
      required: false,
    },
    event_imap:{
      type:String,
      required:false
    },
    event_end_time: {
      type: String,
      required: false,
    },
    event_location: {
      type: String,
      required: false,
    },
    event_address: {
      type: String,
      required: false,
    },
    event_city: {
      type: String,
      required: false,
    },
    event_state: {
      type: String,
      required: false,
    },
    event_country: {
      type: String,
      required: false,
    },
    event_zipcode: {
      type: String,
      required: false,
    },
    event_category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: false,
    },
    // object array of speakers
    event_speakers: {
      type: Array,
      default: [],
    },
    event_sponsors: {
      type: Array,
      default: [],
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

module.exports = mongoose.model("Event", eventSchema);
