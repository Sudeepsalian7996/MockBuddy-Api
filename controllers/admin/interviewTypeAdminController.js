const interviewTypesModel = require("../../models/adminModel/interviewTypeModel");

exports.getAllInterviewTypes = async (req, res) => {
  try {
    const typeRes = await interviewTypesModel.find();
    return res.status(200).json({
      status: true,
      message: "Interview types retrieved successfully",
      data: typeRes,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.createInterviewType = async (req, res) => {
  try {
    const { typeName } = req.body;
    const newType = new interviewTypesModel({
      typeName,
    });
    const savedType = await newType.save();
    res.status(200).json({
      status: true,
      message: "Interview type created successfully",
      data: savedType,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.updateInterviewType = async (req, res) => {
  try {
    const { typeId } = req.params;
    const { typeName } = req.body;

    if (!typeId) {
      return res.status(400).json({
        status: false,
        error: "Interview type ID is required",
        data: null,
      });
    }
    const updatedType = await interviewTypesModel.findByIdAndUpdate(
      typeId,
      { typeName },
      { new: true } // To return the updated document
    );
    if (!updatedType) {
      return res
        .status(404)
        .json({ status: false, error: "Interview type not found", data: null });
    }
    res.status(200).json({
      status: true,
      message: "Interview type updated successfully",
      data: updatedType,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};

exports.deleteInterviewType = async (req, res) => {
  try {
    const { typeId } = req.params;
    const deletedType = await interviewTypesModel.findByIdAndDelete(typeId);
    if (!deletedType) {
      return res.status(400).json({
        status: false,
        message: "Interview type not found",
        data: null,
      });
    }
    res.status(200).json({
      status: true,
      message: "Interview type deleted successfully",
      data: deletedType,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, error: "Internal server error", data: null });
  }
};
