import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

// Connect to MongoDB

// mongoose.connect(process.env.DB_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error(err));

connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
