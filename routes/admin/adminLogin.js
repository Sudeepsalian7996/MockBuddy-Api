const express = require("express");
const routes = express.Router();

//controllers
const { adminLogin } = require("../../controllers/admin/adminLoginController");

//routes
routes.post("/login", adminLogin);

module.exports = routes;
