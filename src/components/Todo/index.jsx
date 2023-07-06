import "./style.css";
import {
  FaRegEdit,
  FaCheckCircle,
  FaTrash,
  FaWindowClose,
  FaEye,
} from "react-icons/fa";
import { useNavigate, useLocation, useMatch } from "react-router-dom";
import useTodoContext from "../../contexts/useTodoContext";

const Todo = ({ value, id, isDone }) => {
  const { switchToEditMode, setInpValue, markAsDone, handleDelete } =
    useTodoContext();

  const location = useLocation();
  const match = useMatch('/')

  console.log(match)

  const navigate = useNavigate();
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
            if (location.pathname !== "/") {
              navigate("../");
            }
          }}
          className="icon delete"
        >
          <FaTrash />
        </span>
        {location.pathname === "/" && (
          <span
            onClick={() => {
              navigate(`/todo/${id}`);
            }}
            className="icon view"
          >
            <FaEye />
          </span>
        )}
      </div>
    </div>
  );
};

export default Todo;
