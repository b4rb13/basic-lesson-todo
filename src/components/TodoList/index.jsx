import Todo from "../Todo";
import "./style.css";
import useTodoContext from "../../contexts/useTodoContext";
import Skeleton from 'react-loading-skeleton'

const TodoList = () => {
  const { list, loading } = useTodoContext();

  return (
    <>
      {loading ? (
        <Skeleton count={20} />
      ) : (
        <div className="todo-list-container">
          {list.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </div>
      )}
    </>
  );
};

export default TodoList;
