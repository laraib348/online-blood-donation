const Request = require("../models/requestmodel");

// Add Request
const addRequest = async (req, res) => {
  try {
    const request = new Request(req.body);

    await request.save();

    res.status(201).json({
      success: true,
      message: "Blood request submitted successfully",
      data: request,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get All Requests
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: requests,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addRequest,
  getAllRequests,
};