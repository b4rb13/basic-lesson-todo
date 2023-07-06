import { createContext, useState, useMemo, useCallback } from "react";
import { useToast } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'
import { useEffect } from "react";
const statuses = {
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
};

const getData = async (setList, setLoading) => {
  try {
    setLoading(true)
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json()
    const newData = data.slice(0, 10).map(item => ({
      id: item.id,
      value: item.title,
      isDone: item.completed
    }))
    setTimeout(() => {
      setList(newData)
      setLoading(false)
    }, 3000)
  } catch (err) {
    console.error(err)
  }
}

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [isEditMode, setIsEditMode] = useState(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData(setList, setLoading)
  }, [])

  const statistics = useMemo(() => {
    const newStat = {
      totalCount: list.length,
      done: list.filter(el => el.isDone).length,
      pending: list.filter(el => !el.isDone).length,
    }
    return newStat
  }, [list]);

  const toast = useToast();

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const addTodo = (todo) => {
    if (!value.trim()) {
      toast({
        title: "Error while adding Todo item.",
        description: "Todo item can not be empty.",
        status: statuses.error,
        duration: 400,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      value: todo,
      id: Date.now().toString(),
      isDone: false,
    };

    setList([...list, newTodo]);
    setValue("");
  };

  const switchToEditMode = (id) => {
    setIsEditMode(id);
  };

  const markAsDone = (id) => {
    setList(
      list.map((li) => {
        if (li.id === id) {
          return {
            ...li,
            isDone: !li.isDone,
          };
        }

        return li;
      })
    );
  };

  const editTodo = useCallback(() => {
    if (!value.trim()) {
      toast({
        title: "Error while adding Todo item.",
        description: "Todo item can not be empty.",
        status: statuses.error,
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newList = list.map((li) => {
      if (li.id === isEditMode) {
        return {
          ...li,
          value,
        };
      }

      return li;
    });

    setList(newList);
    setIsEditMode(null);
    setValue("");
  }, [value]);

  const handleDelete = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  const setInpValue = (v) => {
    setValue(v);
  };

  return (
    <TodoContext.Provider
      value={{
        list,
        isEditMode,
        value,
        handleChange,
        addTodo,
        switchToEditMode,
        markAsDone,
        editTodo,
        handleDelete,
        setInpValue,
        statistics,
        loading
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
