import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";

function UserHome01()
{
    var mainStatus = useSelector(state=>state.userData.value)
useEffect(()=>{
    if(mainStatus){
        toast.success("success")
    }
},[mainStatus])

    return<div className="container">
          <ToastContainer/>
        <h1 style={{textAlign:'center',color:'red'}}>User Home Called...</h1>
    </div>
}
export default UserHome01;