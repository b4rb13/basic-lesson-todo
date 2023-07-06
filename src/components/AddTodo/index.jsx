import { useRef } from "react";
import { FaPlus, FaCheckDouble } from "react-icons/fa";
import { Input, Button, HStack } from "@chakra-ui/react";
import useTodoContext from "../../contexts/useTodoContext";
const AddTodo = () => {
  const ref = useRef();
  const {
    value,
    isEditMode,
    handleChange,
    addTodo,
    editTodo,
    loading,
    cancelEdit,
  } = useTodoContext();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
        }}
      >
        <HStack spacing={4} align="center">
          <Input
            placeholder="Type here"
            size="md"
            ref={ref}
            value={value}
            onChange={handleChange}
            disabled={loading}
          />
          <Button
            onClick={(e) => {
              e.preventDefault();

              if (isEditMode) {
                editTodo();
              } else {
                addTodo(value);
              }
              ref.current.focus();
            }}
            rightIcon={isEditMode ? <FaCheckDouble /> : <FaPlus />}
            colorScheme="teal"
            variant="outline"
            isDisabled={loading}
          >
            {isEditMode ? "Save" : "Add"}
          </Button>
          {isEditMode ? (
            <Button onClick={() => cancelEdit()}> Cancel </Button>
          ) : (
            ""
          )}
        </HStack>
      </form>
    </div>
  );
};

export default AddTodo;
