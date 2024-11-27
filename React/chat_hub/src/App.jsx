import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import SideBar from "./components/sidebar/SideBar.jsx";
import Logout from "./components/user/Logout.jsx";
import MyPost from "./components/user/MyPost.jsx";
import MyProfile from "./components/user/MyProfile.jsx";
import UserList from "./components/user/UserList.jsx";
import UserPost from "./components/user/UserPost.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App(){
  const [status,setStatus] = useState(false);
  const mainStatus = useSelector(state=>state.userData.value);
  console.log("main status"+mainStatus);
  
  useEffect(()=>{
      console.log("main status2"+mainStatus.token);
   })

  return <div className="wrapper">
   {(mainStatus != null) ?
   <div>      
      <SideBar/>
      <div className="main-panel">
        <Header/>
        <Routes>
          <Route path="/userList" element={<UserList/>}></Route>
          <Route path="/userPost" element={<UserPost/>}></Route>
          <Route path="/myPost" element={<MyPost/>}></Route>
          <Route path="/myProfile" element={<MyProfile/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
        </Routes>
      </div>
      </div>
      :
    <Routes>
      <Route  path="/" element={<Login/>}></Route>\
      <Route  path="/register" element={<Register/>}></Route>
    </Routes>
}
  </div>
}
export default App;