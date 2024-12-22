import { Link } from "react-router-dom";
import "../components/SideBar.css";
import myIng from '../myImg.png'

function SideBar() {
  return (
    <div className="side-bar">
      <div>
        <img src={myIng} className="img"/>
        <h2 className="name"><span className="im">I'm </span>YOGENDRA PATIDAR</h2>
        <div className="link-main">
        <Link to="/#" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/contact" className="link">Contact</Link>
        <Link to="/project" className="link">Project</Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
