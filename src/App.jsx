import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import { ChakraProvider } from "@chakra-ui/react";
import TodoProvider from "./contexts/TodoContext";
import AddTodo from "./components/AddTodo";
import SingleTodoItem from "./pages/SingleTodoItem";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,

      children: [
        {
          path: "",
          element: (
            <>
              <AddTodo />
              <TodoList />
            </>
          ),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: 'todo/:todoId',
          element: <SingleTodoItem />
        }
      ],
    },
    {
      path: "*",
      element: <h1>Not Found</h1>,
    },
  ]);

  return (
    <ChakraProvider>
      <TodoProvider>
        <div>
          <RouterProvider router={router} />
        </div>
      </TodoProvider>
    </ChakraProvider>
  );
};

export default App;
