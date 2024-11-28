import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WebService from "./service/WebService";
import WebAPI from "./service/WebAPI";
import { useDispatch } from "react-redux";
import { checkStatus } from "./redux/userSlice";

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

    return <div className="container">
        <div className="row text-center">
            <h1 style={{color:'red' , textShadow:'3px 3px 3px black'}}>Login Here !</h1>
        </div>
        <form onSubmit={(event)=>
                    {
                        loginUser(event);
                    }
                }>
            <div className="row form-group">
                <input type="text" className="form-control"  placeholder="Enter User Email" ref={email}/>
            </div>

            <div className="row form-group">
                <input type="text" className="form-control"  placeholder="Enter User Password" ref={password}/>
            </div>

            <div className="row form-group">
                <input type="submit" className="btn btn-success form-control"  value="Login"  />
            </div>
        </form>
        <span>If You Have Not Register ? <Link to="/register">Click Here !</Link></span>
        <h4 style={{color:'green'}}>{msg}</h4>
    </div>
}
 export default Login;