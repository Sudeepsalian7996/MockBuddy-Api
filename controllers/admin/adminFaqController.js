const faqsModel = require("../../models/adminModel/faqModel");

exports.getAllFaqs = async (req, res) => {
  try {
    const faqRes = await faqsModel.find();
    return res.status(200).json({
      status: true,
      message: "FAQs retrieved successfully",
      data: faqRes,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.createFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newFaq = new faqsModel({
      question,
      answer,
    });
    const savedFaq = await newFaq.save();
    res.status(200).json({
      status: true,
      message: "FAQ created successfully",
      data: savedFaq,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.updateFaq = async (req, res) => {
  try {
    const { faqId } = req.params;
    const { question, answer } = req.body;

    if (!faqId) {
      return res
        .status(400)
        .json({ status: false, error: "FAQ ID is required", data: null });
    }
    const updatedFaq = await faqsModel.findByIdAndUpdate(
      faqId,
      { question, answer },
      { new: true } // To return the updated document
    );
    if (!updatedFaq) {
      return res
        .status(404)
        .json({ status: false, error: "FAQ not found", data: null });
    }
    res.status(200).json({
      status: true,
      message: "FAQ updated successfully",
      data: updatedFaq,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.deleteFaq = async (req, res) => {
  try {
    const { faqId } = req.params;
    const deletedFaq = await faqsModel.findByIdAndDelete(faqId);
    if (!deletedFaq) {
      return res.status(400).json({
        status: false,
        message: "FAQ not found",
        data: null,
      });
    }
    res.status(200).json({
      status: true,
      message: "FAQ deleted successfully",
      data: deletedFaq,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};
