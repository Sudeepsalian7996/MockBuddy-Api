const express = require("express");
const routes = express.Router();

//controllers
const {
  getAllUserFeedback,
  createUserFeedback,
} = require("../../controllers/user/feedbackUserController");

//feedback routes
routes.get("/getAll", getAllUserFeedback);
routes.post("/create", createUserFeedback);

module.exports = routes;
