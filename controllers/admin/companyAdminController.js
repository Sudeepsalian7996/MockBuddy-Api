const companyModel = require("../../models/adminModel/companyModel");

exports.getAllCompanies = async (req, res) => {
  try {
    const companyRes = await companyModel.find();
    return res.status(200).json({
      status: true,
      message: "Companies retrieved successfully",
      data: companyRes,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const { link, isLive, image } = req.body;
    const newCompany = new companyModel({
      link,
      isLive,
      image,
    });
    const savedCompany = await newCompany.save();
    res.status(200).json({
      status: true,
      message: "Company created successfully",
      data: savedCompany,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const { link, isLive, image } = req.body;

    if (!companyId) {
      return res
        .status(400)
        .json({ status: false, error: "Company ID is required", data: null });
    }
    const updatedCompany = await companyModel.findByIdAndUpdate(
      companyId,
      { link, isLive, image },
      { new: true } // To return the updated document
    );
    if (!updatedCompany) {
      return res
        .status(404)
        .json({ status: false, error: "Company not found", data: null });
    }
    res.status(200).json({
      status: true,
      message: "Company updated successfully",
      data: updatedCompany,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const deletedCompany = await companyModel.findByIdAndDelete(companyId);
    if (!deletedCompany) {
      return res.status(400).json({
        status: false,
        message: "Company not found",
        data: null,
      });
    }
    res.status(200).json({
      status: true,
      message: "Company deleted successfully",
      data: deletedCompany,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};
