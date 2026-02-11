import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import namesRoutes from "./routes/names.routes.js";

import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

// ⚡ CORS setup: allow frontend to send requests with credentials
app.use(cors({
  origin: "http://127.0.0.1:5500", // change to your frontend URL (Live Server)
  credentials: true
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/names", namesRoutes);

// Error handler
app.use(errorHandler);

export default app;
