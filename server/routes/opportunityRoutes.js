const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const {
    createOpportunity,
    getOpportunities,
    getOpportunity
} = require("../controllers/opportunityController");

// Get all opportunities
router.get("/", getOpportunities);

// Get one opportunity
router.get("/:id", getOpportunity);

// Create an opportunity
router.post("/", auth, createOpportunity);

module.exports = router;