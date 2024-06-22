const express = require("express");
const routes = express.Router();

//controllers
const {
  getAllInterviewTypes,
  createInterviewType,
  updateInterviewType,
  deleteInterviewType,
} = require("../../controllers/admin/interviewTypeAdminController");

//Interview type routes
routes.get("/getAll", getAllInterviewTypes);
routes.post("/create", createInterviewType);
routes.patch("/update/:typeId", updateInterviewType);
routes.delete("/delete/:typeId", deleteInterviewType);

module.exports = routes;
