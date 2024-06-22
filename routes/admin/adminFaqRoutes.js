const express = require("express");
const routes = express.Router();

//controllers
const {
  getAllFaqs,
  createFaq,
  updateFaq,
  deleteFaq,
} = require("../../controllers/admin/adminFaqController");

//FAQ routes
routes.get("/getAll", getAllFaqs);
routes.post("/create", createFaq);
routes.patch("/update/:faqId", updateFaq);
routes.delete("/delete/:faqId", deleteFaq);

module.exports = routes;
