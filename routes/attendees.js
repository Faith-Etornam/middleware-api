import { Router } from "express";
import * as attendeesController from "../controllers/attendees.controller.js";

const router = Router();

router.get("/", attendeesController.getAttendees);
router.get("/:id", attendeesController.getAttendee);
router.post("/", attendeesController.createAttendee);
router.put("/:id", attendeesController.updateAttendee);
router.delete("/:id", attendeesController.removeAttendee);

export default router;