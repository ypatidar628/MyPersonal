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
    <div className="page-inner">
      <div className="page-header">
        <h3 className="fw-bold mb-3">User Home Called...</h3>
    </div>
    </div>
    </div>
}
export default UserHome01;