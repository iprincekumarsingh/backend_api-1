const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter category name"],
      trim: true,
      maxLength: [100, "Category name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter category description"],
      maxLength: [500, "Category description cannot exceed 500 characters"],
    },
    cover_img: {
      type: String,
      required: [true, "Please enter category cover image"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    is_active: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
