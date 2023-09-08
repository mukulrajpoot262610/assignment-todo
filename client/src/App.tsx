import TodoApp from './pages/TodoApp';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <div className="min-h-screen bg-blue-50 p-4 tracking-tighter">
            <Toaster />
            <TodoApp />
        </div>
    );
}

export default App;
