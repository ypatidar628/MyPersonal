import { useRef } from "react";
import { Link } from "react-router-dom";

function Login(){
    var email = useRef();
    var password = useRef();
    return <div className="container">
        <div className="row text-center">
            <h1 style={{color:'red' , textShadow:'3px 3px 3px black'}}>Login Here !</h1>
        </div>
        <form>
            <div className="row form-group">
                <input type="text" className="form-control"  placeholder="Enter User Email" ref={email}/>
            </div>

            <div className="row form-group">
                <input type="text" className="form-control"  placeholder="Enter User Password" ref={password}/>
            </div>

            <div className="row form-group">
                <input type="submit" className="btn btn-success form-control"  value="Register" />
            </div>
        </form>
        <span>If You Have Not Register ? <Link to="/register">Click Here !</Link></span>
    </div>
}
 export default Login;