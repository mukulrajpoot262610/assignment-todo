"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteTodo = exports.updateTodo = exports.getAllTodos = exports.createTodo = void 0;
const todoService = __importStar(require("../services/todo-service"));
function createTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { text, completed } = req.body;
            const newTodo = yield todoService.createTodoService({
                text,
                completed,
            });
            res.status(201).json({ msg: 'Todo Created Successfully', todo: newTodo });
        }
        catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    });
}
exports.createTodo = createTodo;
function getAllTodos(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todos = yield todoService.getAllTodosService();
            res.status(200).json(todos);
        }
        catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    });
}
exports.getAllTodos = getAllTodos;
function updateTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedTodo = yield todoService.updateTodoService(req.params.id, req.body);
            if (!updatedTodo) {
                res.status(404).json({ msg: 'Todo not found' });
            }
            else {
                res.status(200).json({ msg: 'Todo Updated Successfully', todo: updatedTodo });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Server error' });
        }
    });
}
exports.updateTodo = updateTodo;
function deleteTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todo = yield todoService.getTodoByIdService(req.params.id);
            if (!todo) {
                res.status(404).json({ msg: 'Todo not found' });
                return;
            }
            yield todoService.deleteTodoService(req.params.id);
            res.status(200).json({ msg: 'Deleted Successfully' });
        }
        catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    });
}
exports.deleteTodo = deleteTodo;
