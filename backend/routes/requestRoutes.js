const express = require("express");

const router = express.Router();

const {
  addRequest,
  getAllRequests,
} = require("../controllers/requestController");

router.post("/add", addRequest);

router.get("/all", getAllRequests);

module.exports = router;