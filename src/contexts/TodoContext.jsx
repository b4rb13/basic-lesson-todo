import { createContext, useState, useMemo, useCallback } from "react";
import { useToast } from "@chakra-ui/react";
const statuses = {
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
};

export const TodoContext = createContext();

const initialList = [
  {
    id: "123",
    value: "123",
    isDone: false,
  },
  {
    id: "234",
    value: "234",
    isDone: false,
  },
  {
    id: "456",
    value: "456",
    isDone: false,
  },
  {
    id: "678",
    value: "678",
    isDone: false,
  },
];

const TodoProvider = ({ children }) => {
  const [list, setList] = useState(initialList);
  const [isEditMode, setIsEditMode] = useState(null);
  const [value, setValue] = useState("");
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
        duration: 3000,
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
        statistics
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
