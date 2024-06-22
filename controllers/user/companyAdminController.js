const { getAllCompanies } = require("../admin/companyAdminController");

exports.getAllUserCompanies = async (req, res) => {
  return getAllCompanies(req, res);
};
