import express from "express";
import "dotenv/config";
import http from "node:http";
import { connectDB } from "./config/db.js";

const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(express.json());

// routes
app.get("/api/status", (req, res) => {
  res.send("Server is listening");
});

const server = http.createServer(app);

const startServer = async () => {
  try {
    await connectDB();
    server.listen(port, () => {
      console.log(`Server started on port: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1); // Exit if DB connection fails
  }
};

startServer();
