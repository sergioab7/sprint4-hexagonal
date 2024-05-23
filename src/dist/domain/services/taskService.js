"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const task_1 = require("../entities/task");
class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    getAllTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.findAll();
        });
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.taskRepository.findById(id);
        });
    }
    createTask(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = new task_1.Task(Date.now().toString(), title);
            yield this.taskRepository.save(task);
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.taskRepository.delete(id);
        });
    }
    updateTaskStatus(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.taskRepository.findById(id);
            if (task) {
                task.completed = !task.completed;
                yield this.taskRepository.save(task);
            }
        });
    }
}
exports.TaskService = TaskService;
