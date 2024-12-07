import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import UserHome01 from "./components/user/UserHome01.jsx";
import ChangePassword from "./components/user/ChangePassword.jsx";

function App(){
  var navigate = useNavigate();

  const mainStatus = useSelector(state=>state.userData.value);
  
  useEffect(()=>{
      console.log("main status2"+mainStatus.isLoginStatus);
      if(mainStatus.isLoginStatus==false){
        navigate("/")
    }
    
   },[])

  return <div className="wrapper">
   {(mainStatus.isLoginStatus) ?    
      <div className="main-panel">
      <SideBar/>
        <Header/>
        <Routes>
          <Route path="/userHome01" element={<UserHome01/>}></Route>
          <Route path="/userList" element={<UserList/>}></Route>
          <Route path="/userPost" element={<UserPost/>}></Route>
          <Route path="/myPost" element={<MyPost/>}></Route>
          <Route path="/myProfile" element={<MyProfile/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/changePassword" element={<ChangePassword/>}></Route>
        </Routes>
      </div>
      :
    <Routes>
      <Route  path="/" element={<Login/>}></Route>
      <Route  path="/register" element={<Register/>}></Route>

    </Routes>
 }
  </div>
}
export default App;