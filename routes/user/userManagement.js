const express = require("express");
const routes = express.Router();

//controllers
const {
  registerUser,
  loginUser,
} = require("../../controllers/user/userManagementController");

//routes
routes.post("/register", registerUser);
routes.post("/login", loginUser);

module.exports = routes;
