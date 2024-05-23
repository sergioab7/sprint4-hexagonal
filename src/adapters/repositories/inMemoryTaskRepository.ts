import { Task } from "../../domain/entities/task";
import { TaskRepository } from "../../domain/ports/taskRepository";

export class InMemoryTaskRepository implements TaskRepository{
    private tasks: Task[] = [];

    async findAll(): Promise<Task[]>{
        return this.tasks;
    }

    async findById(id:string): Promise<Task | null>{
        return this.tasks.find(task => task.id === id) || null;
    }

    async save(task:Task): Promise<void>{
        this.tasks.push(task);
    }

    async delete(id:string): Promise<void>{
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
}