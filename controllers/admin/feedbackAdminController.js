const { default: mongoose } = require("mongoose");
const feedbackModel = require("../../models/adminModel/feedbackModel");

exports.getAllFeedback = async (req, res) => {
  try {
    const feedbackRes = await feedbackModel.find().populate("user").exec();
    // Check if feedbacks exist
    if (!feedbackRes) {
      return res.status(400).json({
        status: false,
        message: "No feedbacks found",
        data: null,
      });
    }
    return res.status(200).json({
      status: true,
      message: "Feedbacks retrieved successfully",
      data: feedbackRes,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.createFeedback = async (req, res) => {
  try {
    const { rating, description, user, isAnonymous, adminApproved } = req.body;
    const newFeedback = new feedbackModel({
      rating,
      description,
      user,
      isAnonymous,
      adminApproved,
    });
    const savedFeedback = await newFeedback.save();
    res.status(200).json({
      status: true,
      message: "Feedback given successfully",
      data: savedFeedback,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    const { fId } = req.params;
    const deletedRes = await feedbackModel.findByIdAndDelete(fId);
    if (!deletedRes) {
      return res.status(400).json({
        status: false,
        message: "Feedback not found",
        data: null,
      });
    }
    res.status(200).json({
      status: true,
      message: "Feedback deleted successfully",
      data: deletedRes,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};
