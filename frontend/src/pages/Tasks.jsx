import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { useState } from 'react';
import axios from 'axios';

const Tasks = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = async (task) => {
        try {
            // Hacer una solicitud POST al backend para crear una nueva tarea
            const response = await axios.post('http://localhost:5000/api/tasks', {
            id: Date.now(),
            task: task,
            completed: false,
        });
        // Agregar la nueva tarea al estado local
        setTodos([...todos, response.data]);
    } catch (error) {
        console.error('Error al agregar la tarea:', error);
    }
    };

    const toggleComplete = async (id) => {
        try {
            const todoToUpdate = todos.find(todo => todo.id === id);
            const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

            // Hacer una solicitud PUT al backend para actualizar el estado de la tarea
            await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTodo);

            // Actualizar el estado local con la tarea modificada
            setTodos(
                todos.map(todo =>
                    todo.id === id ? updatedTodo : todo
                )
            );
        } catch (error) {
            console.error('Error al actualizar la tarea:', error);
        }
    };

    const removeTodo = async (id) => {
        try {
            // Hacer una solicitud DELETE al backend para eliminar la tarea
            await axios.delete(`http://localhost:5000/api/tasks/${id}`);

            // Actualizar el estado local eliminando la tarea
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
        }
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