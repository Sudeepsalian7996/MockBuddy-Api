const express = require("express");
const routes = express.Router();

//controllers
const { userGetAllFaqs } = require("../../controllers/user/userFaqController");

//FAQ routes
routes.get("/getAll", userGetAllFaqs);

module.exports = routes;
