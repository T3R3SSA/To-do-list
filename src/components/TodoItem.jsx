import PropTypes from 'prop-types';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <li>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.task}
            </span>
            <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
    );
};

// Define the types of props that the component expects
TodoItem.propTypes = {
    todo: PropTypes.shape({
    id: PropTypes.number.isRequired, // Make sure the ID is a number
    task: PropTypes.string.isRequired, // The task must be a text string
    completed: PropTypes.bool.isRequired, // Completed must be a boolean
    }).isRequired,
  toggleComplete: PropTypes.func.isRequired, // Mark as completed function
  removeTodo: PropTypes.func.isRequired, // Task delete function
};

export default TodoItem;
