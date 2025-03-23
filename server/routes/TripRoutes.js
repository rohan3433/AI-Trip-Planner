import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createTrip, getTrips } from "../controllers/tripController.js";

const router = express.Router();

router.post("/", authMiddleware, createTrip);
router.get("/", authMiddleware, getTrips);

export default router;
