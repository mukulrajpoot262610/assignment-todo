# Node, Express, Typescript, MongoDB

### Project Structrue
```
│   package-lock.json
│   package.json
│   readme.md
│   tsconfig.json
│   vercel.json
│
├───dist
│   │   app.js
│   │
│   ├───config
│   │       db.js
│   │
│   ├───controllers
│   │       todo-controller.js
│   │
│   ├───models
│   │       todo-model.js
│   │
│   ├───routes
│   │       todo-routes.js
│   │
│   └───services
│           todo-service.js
│
└───src
    │   app.ts
    │
    ├───config
    │       db.ts
    │
    ├───controllers
    │   │   index.ts
    │   │
    │   └───todo
    │           createTodoController.ts
    │           deleteTodoController.ts
    │           getAllTodosController.ts
    │           updateTodoController.ts
    │
    ├───models
    │       todo-model.ts
    │
    ├───routes
    │       todo-routes.ts
    │
    └───services
        │   index.ts
        │
        └───todo
                createTodoService.ts
                deleteTodoService.ts
                getAllTodosService.ts
                getTodoByIdService.ts
                updateTodoService.ts
```
