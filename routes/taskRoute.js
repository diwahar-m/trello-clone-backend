import express from "express"
import { createTask, deleteTask, taskList, updateTask } from "../controllers/taskController.js";
import authMiddleware from "../middleware/auth.js";

const taskRouter = express.Router()

taskRouter.get("/list",authMiddleware, taskList)
taskRouter.post("/add",authMiddleware, createTask)
taskRouter.post("/update",authMiddleware, updateTask)
taskRouter.post("/delete",authMiddleware, deleteTask)

export default taskRouter;