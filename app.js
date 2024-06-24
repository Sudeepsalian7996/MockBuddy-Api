// Packages
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("./config/corsOptions");

// Load environment variables
dotenv.config();

// Admin routes
const adminLoginRoutes = require("./routes/admin/adminLogin");
const adminFaqRoutes = require("./routes/admin/adminFaqRoutes");
const interviewTypeAdminRoutes = require("./routes/admin/interviewTypesAdminRoutes");
const feedbackAdminRoutes = require("./routes/admin/feedbackAdminRoutes");
const companyAdminRoutes = require("./routes/admin/companyAdminRoutes");

// User routes
const userLoginRoutes = require("./routes/user/userManagement");
const userFaqRoutes = require("./routes/user/userFaqRoutes");
const interviewTypeUserRoutes = require("./routes/user/interviewTypesUserRoutes");
const feedbackUserRoutes = require("./routes/user/feedbackUserRoutes");
const companyUserRoutes = require("./routes/user/companyAdminRoutes");

// Database connect
const connectDB = require("./config/db");
connectDB();

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({ limit: "1200mb" }));
app.use(cors);

// Admin endpoints
app.use("/api/admin", adminLoginRoutes);
app.use("/api/admin/faq", adminFaqRoutes);
app.use("/api/admin/interviewType", interviewTypeAdminRoutes);
app.use("/api/admin/feedback", feedbackAdminRoutes);
app.use("/api/admin/company", companyAdminRoutes);

// User endpoints
app.use("/api/user", userLoginRoutes);
app.use("/api/user/faq", userFaqRoutes);
app.use("/api/user/interviewType", interviewTypeUserRoutes);
app.use("/api/user/feedback", feedbackUserRoutes);
app.use("/api/user/company", companyUserRoutes);

// Define the port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log("commit check");
