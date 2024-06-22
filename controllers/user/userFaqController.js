const { getAllFaqs } = require("../admin/adminFaqController");

exports.userGetAllFaqs = (req, res) => {
  return getAllFaqs(req, res);
};
