import { Task } from "../entities/task";

export interface TaskRepository{
    findAll(): Promise<Task[]>;
    findById(id:string): Promise<Task | null>;
    save(task: Task): Promise<void>;
    delete(id:string): Promise<void>;
}