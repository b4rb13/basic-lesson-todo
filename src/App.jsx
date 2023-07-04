import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import { ChakraProvider } from "@chakra-ui/react";
import TodoProvider from "./contexts/TodoContext";
import 'react-loading-skeleton/dist/skeleton.css'
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
      <TodoProvider>
        <div>
          <Layout>
            <TodoList />
          </Layout>
        </div>
      </TodoProvider>
    </ChakraProvider>
  );
};

export default App;
