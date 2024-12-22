import { Route, Routes } from "react-router-dom";
import "../components/Main.css";
import About from "./Menu/About";
import Contact from "./Menu/Contact";
import Project from "./Menu/Projects";
import SideBar from "./SideBar";
// import SideBar from "./SideBar";
function MainContent() {
  return (
    <div className="main-content">
      <div>
        <h1>My Main Content App</h1>
      </div>
     
        <Routes>
          <Route path="/#" element={<SideBar/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
        </Routes>
    </div>
  );
}
export default MainContent;
