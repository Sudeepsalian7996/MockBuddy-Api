const express = require("express");
const routes = express.Router();

//controllers
const {
  getAllUserInterviewtypes,
} = require("../../controllers/user/interviewTypeUserController");

//Interview type routes
routes.get("/getAll", getAllUserInterviewtypes);

module.exports = routes;
