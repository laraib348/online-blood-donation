const express = require("express");
const router = express.Router();

const {
  addRequest,
  getAllRequests,
  approveRequest,
  rejectRequest
} = require("../controllers/requestController");

// Create request
router.post("/add", addRequest);

// Get all requests
router.get("/all", getAllRequests);

// Approve request
router.put("/approve/:id", approveRequest);

// Reject request
router.put("/reject/:id", rejectRequest);

module.exports = router;