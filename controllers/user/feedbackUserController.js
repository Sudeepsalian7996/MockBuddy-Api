const {
  getAllFeedback,
  createFeedback,
} = require("../admin/feedbackAdminController");

exports.getAllUserFeedback = async (req, res) => {
  return getAllFeedback(req, res);
};

exports.createUserFeedback = async (req, res) => {
  return createFeedback(req, res);
};
