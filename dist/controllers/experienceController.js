"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExperienceById = exports.getExperiences = void 0;
const experinceModel_1 = require("../models/experinceModel");
const getExperiences = async (_req, res) => {
    try {
        const experiences = await experinceModel_1.Experience.find();
        res.status(200).json({
            success: true,
            data: experiences,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch experiences",
            error: error.message,
        });
    }
};
exports.getExperiences = getExperiences;
const getExperienceById = async (req, res) => {
    try {
        const { id } = req.params;
        const experience = await experinceModel_1.Experience.findById(id);
        if (!experience) {
            return res.status(404).json({
                success: false,
                message: "Experience not found",
            });
        }
        res.status(200).json({
            success: true,
            data: experience,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch experience",
            error: error.message,
        });
    }
};
exports.getExperienceById = getExperienceById;
//# sourceMappingURL=experienceController.js.map