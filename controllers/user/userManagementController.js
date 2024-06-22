const bcrypt = require("bcryptjs");
const userLoginModel = require("../../models/userModel/userLoginModel");

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, password } = req.body;

    // Check if the user already exists by email or phone
    const existingUserEmail = await userLoginModel.findOne({ email });
    const existingUserPhone = await userLoginModel.findOne({ phone });

    if (existingUserEmail && existingUserPhone) {
      return res.status(400).json({
        status: false,
        message: "Email and phone number are already registered",
        data: null,
      });
    } else if (existingUserEmail) {
      return res.status(400).json({
        status: false,
        message: "Email is already registered",
        data: null,
      });
    } else if (existingUserPhone) {
      return res.status(400).json({
        status: false,
        message: "Phone number is already registered",
        data: null,
      });
    }

    // Create the new user
    const newUser = new userLoginModel({
      firstName,
      lastName,
      phone,
      email,
      password,
    });
    // Save the user to the database
    await newUser.save();

    res.status(200).json({
      status: true,
      message: "Registration successful",
      data: newUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await userLoginModel.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid email", data: null });
    }
    const passwordCheck = await bcrypt.compare(password, userData.password);
    if (!passwordCheck) {
      return res
        .status(400)
        .json({ status: false, message: "Incorrect password", data: null });
    }
    return res
      .status(200)
      .json({
        status: true,
        message: "User login successfull",
        data: userData,
      });
  } catch (err) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};
