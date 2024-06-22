const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      require: true,
      default: "",
    },
    answer: {
      type: String,
      require: true,
      default: "",
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Faq", faqSchema);
