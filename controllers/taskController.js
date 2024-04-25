import {
  createTaskPersistence,
  getAllTasksPersistence,
  getTaskByIDPersistence,
  updateTaskPersistence,
  deleteTaskPersistence,
} from "../persistence/taskPersistence.js";

export const createTask = async (req, res) => {
  try {
    const task = await createTaskPersistence(req.body);
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasksPersistence();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const getTaskByID = async (req, res) => {
  try {
    const task = await getTaskByIDPersistence(req.params.id);
    if (!task) return res.status(404).send({ error: "No Task found" });
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await getTaskByIDPersistence(req.params.id);
    if (!task) return res.status(404).send({ error: "No Task found" });
    const updatedTask = await updateTaskPersistence(req.params.id, req.body);
    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await getTaskByIDPersistence(req.params.id);
    if (!task) return res.status(404).send({ error: "No Task Found" });
    await deleteTaskPersistence(req.params.id);
    res.status(200).send({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
