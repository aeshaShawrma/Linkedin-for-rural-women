const Opportunity = require("../models/Opportunity");

// Create an opportunity
const createOpportunity = async (req, res) => {

    try {

        const {
            title,
            description,
            location,
            salary,
            skills,
            type
        } = req.body;

        const opportunity = new Opportunity({
            title,
            description,
            location,
            salary,
            skills,
            type,
            postedBy: req.user.id
        });

        const savedOpportunity = await opportunity.save();

        res.status(201).json({
            success: true,
            message: "Opportunity created successfully",
            opportunity: savedOpportunity
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// Get all opportunities
const getOpportunities = async (req, res) => {

    try {

        const opportunities = await Opportunity.find()
            .populate("postedBy", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            opportunities
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// Get one opportunity
const getOpportunity = async (req, res) => {

    try {

        const opportunity = await Opportunity.findById(req.params.id)
            .populate("postedBy", "name email");

        if (!opportunity) {
            return res.status(404).json({
                success: false,
                message: "Opportunity not found"
            });
        }

        res.status(200).json({
            success: true,
            opportunity
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


module.exports = {
    createOpportunity,
    getOpportunities,
    getOpportunity
};