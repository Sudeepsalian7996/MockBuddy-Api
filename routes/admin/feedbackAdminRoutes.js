const express = require("express");
const routes = express.Router();

//controllers
const {
  getAllFeedback,
  deleteFeedback,
} = require("../../controllers/admin/feedbackAdminController");

//feedback routes
routes.get("/getAll", getAllFeedback);
routes.delete("/delete/:fId", deleteFeedback);

module.exports = routes;
