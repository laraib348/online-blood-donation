const Request = require("../models/requestModel");

// ➤ CREATE REQUEST
const addRequest = async (req, res) => {
  try {
    const data = await Request.create(req.body);

    res.status(201).json({
      success: true,
      message: "Request created successfully",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ➤ GET ALL REQUESTS
const getAllRequests = async (req, res) => {
  try {
    const data = await Request.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ➤ APPROVE REQUEST
const approveRequest = async (req, res) => {
  try {
    const data = await Request.findByIdAndUpdate(
      req.params.id,
      { status: "Approved" },
      { new: true }
    );

    res.json({
      success: true,
      message: "Request Approved",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// ➤ REJECT REQUEST
const rejectRequest = async (req, res) => {
  try {
    const data = await Request.findByIdAndUpdate(
      req.params.id,
      { status: "Rejected" },
      { new: true }
    );

    res.json({
      success: true,
      message: "Request Rejected",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  addRequest,
  getAllRequests,
  approveRequest,
  rejectRequest
};