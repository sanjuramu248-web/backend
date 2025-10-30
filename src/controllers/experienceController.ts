import { Request, Response } from "express";
import { Experience } from "../models/experinceModel";

export const getExperiences = async (_req: Request, res: Response) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json({
      success: true,
      data: experiences,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch experiences",
      error: error.message,
    });
  }
};

export const getExperienceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id);
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch experience",
      error: error.message,
    });
  }
};