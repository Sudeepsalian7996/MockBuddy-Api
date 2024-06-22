const {
  getAllInterviewTypes,
} = require("../admin/interviewTypeAdminController");

exports.getAllUserInterviewtypes = async (req, res) => {
  return getAllInterviewTypes(req, res);
};
