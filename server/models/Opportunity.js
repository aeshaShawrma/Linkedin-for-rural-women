const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    salary: {
      type: String
    },

    skills: {
      type: [String],
      default: []
    },

    type: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Training", "Business"],
      required: true
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Opportunity", opportunitySchema);