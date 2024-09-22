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
    id: PropTypes.number.isRequired, // El ID debe ser un número
    task: PropTypes.string.isRequired, // La tarea es una cadena
    completed: PropTypes.bool.isRequired, // El estado de completado es booleano
    })).isRequired,
  toggleComplete: PropTypes.func.isRequired, // toggleComplete debe ser una función
  removeTodo: PropTypes.func.isRequired, // removeTodo debe ser una función
};

export default TodoList;
