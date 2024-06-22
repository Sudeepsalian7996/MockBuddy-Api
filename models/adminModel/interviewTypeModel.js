const mongoose = require("mongoose");

const interviewTypeSchema = new mongoose.Schema(
  {
    typeName: {
      type: String,
      require: true,
      default: "",
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("InterviewType", interviewTypeSchema);
