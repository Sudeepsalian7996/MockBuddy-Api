const express = require("express");
const routes = express.Router();

//controllers
const {
  getAllUserCompanies,
} = require("../../controllers/user/companyAdminController");

// Company routes
routes.get("/getAll", getAllUserCompanies);

module.exports = routes;
