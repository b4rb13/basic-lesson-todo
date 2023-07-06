import { useEffect, useState } from "react";
import Todo from "../../components/Todo";
import { useParams } from "react-router-dom";

const SingleTodoItem = () => {
  const { todoId } = useParams();

  const [todo, setTodo] = useState({
    value: "",
    id: null,
    isDone: false,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((t) =>
        setTodo({
          value: t.title,
          id: t.id,
          isDone: t.completed,
        })
      );
  }, []);

  return (
    <>
      {todo.id && todo.value && (
        <Todo value={todo.value} id={todo.id} isDone={todo.isDone} />
      )}
    </>
  );
};

export default SingleTodoItem;
