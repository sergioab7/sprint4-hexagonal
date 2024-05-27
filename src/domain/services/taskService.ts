import { TaskRepository } from "../ports/taskRepository";
import { Task } from "../entities/task";

export class TaskService{
    constructor(private taskRepository: TaskRepository){}

    async getAllTasks(): Promise<Task[]>{
        return this.taskRepository.findAll();
    }

    async getTaskById(id:string): Promise<Task | null>{
        return this.taskRepository.findById(id);
    }

    async createTask(title:string): Promise<void>{
        const task = new Task(Date.now().toString(), title);
        await this.taskRepository.save(task);
    }

    async deleteTask(id:string): Promise<void>{
        await this.taskRepository.delete(id);
    }

    async updateTaskStatus(id: string): Promise<void> {
        const task = await this.taskRepository.findById(id);
        if (task) {
            task.completed = !task.completed;
        }
    }
}