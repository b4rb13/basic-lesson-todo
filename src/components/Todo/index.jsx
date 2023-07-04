import "./style.css";
import {
  FaRegEdit,
  FaCheckCircle,
  FaTrash,
  FaWindowClose,
} from "react-icons/fa";
import useTodoContext from "../../contexts/useTodoContext";

const Todo = ({ value, id, isDone }) => {
  const { switchToEditMode, setInpValue, markAsDone, handleDelete } =
    useTodoContext()
  return (
    <div className={`todo-container ${isDone ? "done" : ""}`}>
      <p>{value}</p>
      <div className="actions">
        <span
          onClick={() => {
            switchToEditMode(id);
            setInpValue(value);
          }}
          className="icon edit"
        >
          <FaRegEdit />
        </span>
        <span
          onClick={() => {
            markAsDone(id);
          }}
          className={`icon ${isDone ? "undone" : "done"}`}
        >
          {isDone ? <FaWindowClose /> : <FaCheckCircle />}
        </span>
        <span
          onClick={() => {
            handleDelete(id);
          }}
          className="icon delete"
        >
          <FaTrash />
        </span>
      </div>
    </div>
  );
};

export default Todo;
