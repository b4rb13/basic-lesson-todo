import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from 'react-router-dom'
import "./style.css";

const Layout = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="main-content">
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
