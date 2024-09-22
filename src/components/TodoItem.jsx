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

// Definir los tipos de las props que espera el componente
TodoItem.propTypes = {
    todo: PropTypes.shape({
    id: PropTypes.number.isRequired, // Asegúrate de que el ID sea un número
    task: PropTypes.string.isRequired, // La tarea debe ser una cadena de texto
    completed: PropTypes.bool.isRequired, // Completado debe ser un booleano
    }).isRequired,
  toggleComplete: PropTypes.func.isRequired, // Función para marcar como completado
  removeTodo: PropTypes.func.isRequired, // Función para eliminar la tarea
};

export default TodoItem;
