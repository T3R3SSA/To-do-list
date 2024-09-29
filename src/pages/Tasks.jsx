import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { useState } from 'react';

const Tasks = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const newTodo = {
            id: Date.now(),
            task: task,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Tasks</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
    );
};

export default Tasks;