const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
    },
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    adminApproved: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
