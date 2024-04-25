import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRouters.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Server listening on port ${port} `));
