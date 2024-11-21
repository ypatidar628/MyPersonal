import Header from "./components/header/Header.jsx";
import SideBar from "./components/sidebar/SideBar.jsx";

function App(){
  return <div className="wrapper">
      <SideBar/>
      <div className="main-panel">
        <Header/>
      </div>
  </div>
}
export default App;