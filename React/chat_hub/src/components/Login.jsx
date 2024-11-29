import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WebService from "./service/WebService";
import WebAPI from "./service/WebAPI";
import { useDispatch } from "react-redux";
import { checkStatus } from "./redux/userSlice";
import "../components/Login.css"

function Login(){
    const [msg,setMessage] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    var email = useRef();
    var password = useRef();


    var loginUser = async(event)=>{
        event.preventDefault();
        var em = email.current.value;
        var pass = password.current.value;

        var obj= {"email":em  , "password":pass};
        console.log("Object is : "+ obj);

        var response = await WebService.postAPICall(WebAPI.loginAPI,obj);

        console.log(response);

        // console.log(JSON.stringify(response));

        if(response.data.status){
            dispatch(checkStatus(true))
            setMessage(response.data.message);  
        }
        else{
            setMessage(response.data.message);
        }
      }

    return<div className="log-container">
    <div className="login-container">
    <div className="row text-center ">
        <h1 className="login-title">Login Here !</h1>
    </div>
    <form  onSubmit={(event)=>
                {
                    loginUser(event);
                }
            } >
        <div className="form-group">
            <label htmlFor="email" className="label">Email Address</label>
            <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input type="email" id="email" name="email" className="input" placeholder="Enter your email" ref={email} required/>
            </div>
            <div className="error" id="emailError">Please enter a valid email address</div>
        </div>
        <div className="form-group">
            <label htmlFor="password" className="label">Password</label>
            <div className="input-group">
                <i className="fas fa-lock"></i>
                <input type="password" id="password" className="input" name="password" placeholder="Enter your password"  ref={password} required />
            </div>
            <div className="error" id="passwordError">Password must be at least 6 characters</div>
        </div>
        <button type="submit" className="button">
            <i className="fas fa-sign-in-alt"></i> Sign In
        </button>
    </form>
    <span style={{color:'red'}}>{msg}</span>
    <br />
    <span>If You Have Not Register ? <Link to="/register">Click Here !</Link></span>
    <br />

    
    </div>
</div>
}
 export default Login;