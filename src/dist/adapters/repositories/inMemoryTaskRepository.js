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
exports.InMemoryTaskRepository = void 0;
class InMemoryTaskRepository {
    constructor() {
        this.tasks = [];
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.tasks;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.tasks.find(task => task.id === id) || null;
        });
    }
    save(task) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tasks.push(task);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tasks = this.tasks.filter(task => task.id !== id);
        });
    }
}
exports.InMemoryTaskRepository = InMemoryTaskRepository;
