import express from "express";
import EventRouter from "./routes/events.js";
import logger from "./middlewares/logger.js";
const app = express();
const PORT = 3000;

//use logger middleware
app.use(logger);

//Middleware to parse json
app.use(express.json());

//Routes
app.use("/api/events", EventRouter);

// Add the /api/time endpoint
app.get("/api/time", (req, res) => {
	res.json({ currentTime: new Date().toISOString() });
  });

//Route not found
app.use((req, res) => {
	res.status(404).json({ message: "Route not found" });
});

//Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
