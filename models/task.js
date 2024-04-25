import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
  status: { type: String, enum: ["To Do", "In Progress", "Done"] },
  priority: { type: Number, min: 0, max: 5, default: 0 },
  label: { type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
