import * as attendeeService from "../services/attendees.service.js";

export const getAttendees = (req, res) => {
  const attendees = attendeeService.getAttendees();
  res.status(200).json({
    status: "success",
    data: attendees,
    message: "Attendees retrieved successfully",
  });
};

export const getAttendee = (req, res) => {
  const { id } = req.params;
  const attendee = attendeeService.getAttendee(id);
  if (attendee) {
    res.status(200).json({
      status: "success",
      message: "Attendee found",
      data: attendee,
    });
  } else {
    res.status(404).json({
      status: "error",
      message: "Attendee not found",
      data: {},
    });
  }
};

export const createAttendee = (req, res) => {
  const attendee = req.body;
  const result = attendeeService.createAttendee(attendee);
  if (!result) {
    return res.status(400).json({ message: "Failed to create attendee" });
  }
  res.status(201).json({
    status: "success",
    message: "Attendee created successfully",
    data: attendee,
  });
};

export const updateAttendee = (req, res) => {
  const id = req.params.id;
  const attendee = req.body;
  const result = attendeeService.updateAttendee(id, attendee);
  if (!result) {
    return res.status(400).json({ message: "Failed to update attendee" });
  }
  res.status(200).json({
    status: "success",
    message: "Attendee updated successfully",
    data: attendee,
  });
};

export const removeAttendee = (req, res) => {
  const id = req.params.id;
  const result = attendeeService.deleteAttendee(id);
  if (!result) {
    return res.status(400).json({
      status: " error",
      message: "Failed to delete attendee",
    });
  }
  res.status(200).json({
    status: "success",
    message: "Attendee deleted successfully",
  });
};