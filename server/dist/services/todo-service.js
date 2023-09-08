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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoService = exports.updateTodoService = exports.getTodoByIdService = exports.getAllTodosService = exports.createTodoService = void 0;
const todo_model_1 = __importDefault(require("../models/todo-model"));
function createTodoService(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = new todo_model_1.default(data);
        return yield todo.save();
    });
}
exports.createTodoService = createTodoService;
function getAllTodosService() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield todo_model_1.default.find();
    });
}
exports.getAllTodosService = getAllTodosService;
function getTodoByIdService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield todo_model_1.default.findById(id);
    });
}
exports.getTodoByIdService = getTodoByIdService;
function updateTodoService(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield todo_model_1.default.findByIdAndUpdate(id, data, { new: true });
    });
}
exports.updateTodoService = updateTodoService;
function deleteTodoService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield todo_model_1.default.findByIdAndRemove(id);
    });
}
exports.deleteTodoService = deleteTodoService;
