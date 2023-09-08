"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const todo_routes_1 = __importDefault(require("./routes/todo-routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Database Connection
(0, db_1.default)();
// Todo routes
app.use('/api', todo_routes_1.default);
app.get('/', (req, res) => {
    res.json({ msg: 'Hello World 👋' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
