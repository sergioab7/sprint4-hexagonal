import { InMemoryTaskRepository } from "../repositories/inMemoryTaskRepository";
import { TaskService } from "../../domain/services/taskService";
import { Request, Response} from "express";

const taskRepository = new InMemoryTaskRepository();
const taskService = new TaskService(taskRepository);

export class TaskController {
    static async getTasks(req: Request, res: Response) {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    }

    static async getTaskById(req: Request, res: Response) {
        const task = await taskService.getTaskById(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).send('Task not found');
        }
    }

    static async createTask(req: Request, res: Response) {
        const { title } = req.body;
        await taskService.createTask(title);
        res.status(201).send('Task created');
    }

    static async deleteTask(req: Request, res: Response) {
        await taskService.deleteTask(req.params.id);
        res.status(200).send('Task deleted');
    }

    static async updateTaskStatus(req: Request, res: Response) {
        await taskService.updateTaskStatus(req.params.id);
        res.status(200).send('Task status updated');
    }
}