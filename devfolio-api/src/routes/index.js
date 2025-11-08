import express from "express";
import profileRoutes from "./profileRoutes.js";
import skillsRoutes from "./skillsRoutes.js";
import projectsRoutes from "./projectsRoutes.js";
import contactRoutes from "./contactRoutes.js";

const router = express.Router();

router.use("/profile", profileRoutes);
router.use("/skills", skillsRoutes);
router.use("/projects", projectsRoutes);
router.use("/contact", contactRoutes);

export default router;
