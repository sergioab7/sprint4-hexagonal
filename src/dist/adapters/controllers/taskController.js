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
exports.TaskController = void 0;
const inMemoryTaskRepository_1 = require("../repositories/inMemoryTaskRepository");
const taskService_1 = require("../../domain/services/taskService");
const taskRepository = new inMemoryTaskRepository_1.InMemoryTaskRepository();
const taskService = new taskService_1.TaskService(taskRepository);
class TaskController {
    static getTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield taskService.getAllTasks();
            res.json(tasks);
        });
    }
    static getTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield taskService.getTaskById(req.params.id);
            if (task) {
                res.json(task);
            }
            else {
                res.status(404).send('Task not found');
            }
        });
    }
    static createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title } = req.body;
            yield taskService.createTask(title);
            res.status(201).send('Task created');
        });
    }
    static deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield taskService.deleteTask(req.params.id);
            res.status(200).send('Task deleted');
        });
    }
    static updateTaskStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield taskService.updateTaskStatus(req.params.id);
            res.status(200).send('Task status updated');
        });
    }
}
exports.TaskController = TaskController;
