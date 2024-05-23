import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { TaskController } from "../adapters/controllers/taskController";

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.get('/tasks', TaskController.getTasks);
app.get('/tasks/:id', TaskController.getTaskById);
app.post('/tasks', TaskController.createTask);
app.delete('/tasks/:id', TaskController.deleteTask);
app.put('/tasks/:id', TaskController.updateTaskStatus);


app.listen(PORT, () => {
    console.log(`[+] Servidor corriendo en el puerto: ${PORT}`);
})