import Task from "../models/task.js";

export const createTaskPersistence = async (task) => {
  try {
    const newTask = new Task(task);
    const createdTask = await newTask.save();
    return createdTask;
  } catch (error) {
    throw new Error("Failed to create task: " + error.message);
  }
};

export const getAllTasksPersistence = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error("Failed to retrieve tasks: " + error.message);
  }
};

export const getTaskByIDPersistence = async (id) => {
  try {
    const task = await Task.findById(id);
    return task;
  } catch (error) {
    throw new Error("No task found: " + error.message);
  }
};

export const updateTaskPersistence = async (id, task) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, task);
    return updatedTask;
  } catch (error) {
    throw new Error("Failed to update task: " + error.message);
  }
};

export const deleteTaskPersistence = async (id) => {
  try {
    const task = await Task.findByIdAndDelete(id);
    return task;
  } catch (error) {
    throw new Error("Failed to delete task: " + error.message);
  }
};
