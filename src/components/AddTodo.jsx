import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ addTodo }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            addTodo(newTask);
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired, // addTodo debe ser una función
};

export default AddTodo;
