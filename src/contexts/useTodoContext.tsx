import { useContext } from "react";
import { TodoContext } from "./TodoContext";

const useTodoContext = () => {
    const value = useContext(TodoContext)
    return value
}

export default useTodoContext