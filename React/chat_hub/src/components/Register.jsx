import { useRef, useState } from "react";
import WebService from "./service/WebService";
import WebAPI from "./service/WebAPI";
import { useNavigate } from "react-router-dom";
import "../components/Register.css"

function Register(){

    const navigate = useNavigate("");
    const [msg,setMessage] = useState("");
    const [validMsg,setValidationMessage] = useState("");


    var name =  useRef();
    var email = useRef();
    var password = useRef();
    var phone = useRef();
    var gender = useRef();

    var registerUser = async (event)=>{
        event.preventDefault();
        var nm =name.current.value;
        var em =email.current.value;
        var pass =password.current.value;
        var mob =phone.current.value;
        var gen =gender.current.value;

        var obj = {"name" : nm , "phone" : mob , "email" : em , "password" : pass , "gender" : gen}
        console.log("Object is : " +obj)

        var resp = await WebService.postAPICall(WebAPI.registerAPI,obj);
        console.log("Response is : "+resp);
        console.log("String Response is : "+JSON.stringify(resp));

        if(resp.data.status){
            navigate("/")
        }
        else{
            setMessage(resp.data.message)
            setValidationMessage(resp.data.data[0].message)
        }
    }
    return <div className="reg-container">
        <div className="register-container">
        <div className="register-title">
            <h1 >Register Here !</h1>
        </div>

        <form onSubmit={registerUser}>
  
        <div className="row form-group">
            <input type="text" className="input form-control"  placeholder="Enter User Name" ref={name}/>
        </div>

        <div className="row form-group">
            <input type="text" className="input form-control"  placeholder="Enter User Email" ref={email}/>
        </div>

        <div className="row form-group">
            <input type="text" className="input form-control"  placeholder="Enter User Password" ref={password}/>
        </div>

        <div className="row form-group">
            <input type="text" className="input form-control"  placeholder="Enter User Phone" ref={phone}/>
        </div>

        <div className="row form-group">
            <select className="form-control" ref={gender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        
        <div className="row form-group">
            <input type="submit" className="btn form-control button"  value="Register" onClick={()=>{
                registerUser();
            }}/>
        </div>
          
        </form>
        <h1 style={{color:'red'}}>{msg}  {validMsg}</h1>
        </div>
    </div>
}
 export default Register;