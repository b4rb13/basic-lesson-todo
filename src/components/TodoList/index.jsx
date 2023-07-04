import Todo from "../Todo";
import "./style.css";
import useTodoContext from '../../contexts/useTodoContext';

const TodoList = () => {

  const { list } = useTodoContext()
    
  return (
    <div className="todo-list-container">
      {list.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
