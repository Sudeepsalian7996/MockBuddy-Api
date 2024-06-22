const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    isLive: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("company", companySchema);
