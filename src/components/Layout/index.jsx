import Footer from "./components/Footer";
import Header from "./components/Header";
import AddTodo from "../AddTodo";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      <div className="main-content">
        <AddTodo />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
