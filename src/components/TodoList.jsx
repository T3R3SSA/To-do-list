import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete} 
                    removeTodo={removeTodo} 
                />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, // The ID must be a number
    task: PropTypes.string.isRequired, // The task is a chain
    completed: PropTypes.bool.isRequired, // Completed status is boolean
    })).isRequired,
  toggleComplete: PropTypes.func.isRequired, // toggleComplete must be a function
  removeTodo: PropTypes.func.isRequired, // removeEverything must be a function
};

export default TodoList;
