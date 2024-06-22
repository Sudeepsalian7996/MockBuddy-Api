const express = require("express");
const routes = express.Router();

//controllers
const {
  createCompany,
  getAllCompanies,
  updateCompany,
  deleteCompany,
} = require("../../controllers/admin/companyAdminController");

//Company routes
routes.get("/getAll", getAllCompanies);
routes.post("/create", createCompany);
routes.patch("/update/:companyId", updateCompany);
routes.delete("/delete/:companyId", deleteCompany);

module.exports = routes;
