import { Router } from "express";
import {
  createTask,
  getAllTasks,
  getTaskByID,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getAllTasks);
router.get("/:id", authMiddleware, getTaskByID);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

export default router;
