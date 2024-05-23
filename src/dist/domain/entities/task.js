"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
exports.Task = Task;
