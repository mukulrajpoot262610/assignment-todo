# React + TypeScript + Vite

### Project Structure
```
│   .eslintrc.cjs
│   .gitignore
│   index.html
│   package-lock.json
│   package.json
│   postcss.config.js
│   README.md
│   tailwind.config.js
│   tree.txt
│   tsconfig.json
│   tsconfig.node.json
│   vite.config.ts
│
├───public
│       vite.svg
│
└───src
    │   App.tsx
    │   index.css
    │   main.tsx
    │   vite-env.d.ts
    │
    ├───assets
    │       check.svg
    │       edit.svg
    │       logo.png
    │       plus.svg
    │       trash.svg
    │
    ├───components
    │   │   HeaderComponent.tsx
    │   │
    │   ├───AddEditTodoModal
    │   │       AddEditTodoModal.tsx
    │   │       AddEditTodoModal.types.ts
    │   │       index.ts
    │   │
    │   ├───Tab
    │   │       index.ts
    │   │       Tab.tsx
    │   │       Tab.types.ts
    │   │
    │   └───TodoCard
    │           index.ts
    │           TodoCard.tsx
    │           TodoCard.types.ts
    │
    ├───helpers
    │       api.ts
    │
    ├───lib
    │   └───todo
    │       │   index.ts
    │       │
    │       └───services
    │               createTodos.ts
    │               deleteTodo.ts
    │               fetchTodos.ts
    │               markTodoComplete.ts
    │               updateTodos.ts
    │
    ├───pages
    │       TodoApp.tsx
    │
    └───types
            index.ts
            Todo.ts
            TodoEditInfo.ts
            TodoPayload.ts
```
