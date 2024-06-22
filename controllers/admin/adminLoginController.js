const bcrypt = require("bcryptjs");
const adminLoginModal = require("../../models/adminModel/adminLoginModel");

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminData = await adminLoginModal.findOne({ email });
    if (!adminData) {
      return res.status(400).json({ status: false, message: "Invalid email" });
    }
    const passwordCheck = await bcrypt.compare(password, adminData.password);
    if (!passwordCheck) {
      return res
        .status(400)
        .json({ status: false, message: "Incorrect password", data: null });
    }
    return res
      .status(200)
      .json({
        status: true,
        message: "Admin login successfull",
        data: adminData,
      });
  } catch (err) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};
