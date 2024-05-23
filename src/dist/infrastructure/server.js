"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../adapters/controllers/taskController");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3005;
app.use(express_1.default.json());
app.get('/tasks', taskController_1.TaskController.getTasks);
app.get('/tasks/:id', taskController_1.TaskController.getTaskById);
app.post('/tasks', taskController_1.TaskController.createTask);
app.delete('/tasks/:id', taskController_1.TaskController.deleteTask);
app.put('/tasks/:id', taskController_1.TaskController.updateTaskStatus);
app.listen(PORT, () => {
    console.log(`[+] Servidor corriendo en el puerto: ${PORT}`);
});
