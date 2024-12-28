import { useRef } from "react";
import { Link } from "react-router-dom";
// import "./component/menu/Login.css"
import "../css/Login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket,faEnvelope,faEye} from '@fortawesome/free-solid-svg-icons';


function Login() {

    let email = useRef();
    let password = useRef();

    return (
        <div className="log-container1" >
            <div className="login-container">
                <div className="row text-center ">
                    <h1 className="login-title">Login Here <FontAwesomeIcon icon={faRightToBracket} /></h1>
                </div>
                <form onSubmit={(event) => {
                    loginUser(event);
                }
                } >

                    <div className="form-group">
                        <label htmlFor="email" className="label">Email Address <FontAwesomeIcon icon={faEnvelope} /></label>
                        <input type="email" id="email" name="email" className="input1" placeholder="Enter your email" ref={email} requiredaria-describedby="emailError"  />
                        <div className="error" id="emailError">Please enter a valid email address</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="label">Password <FontAwesomeIcon icon={faEye} /></label>
                        <input type="password" id="password" name="password" className="input1" placeholder="Enter your password" ref={password} required aria-describedby="passwordError" />
                        <div className="error" id="passwordError">Password must be at least 6 characters</div>
                    </div>
                    <button type="submit" className="button">
                    <FontAwesomeIcon icon={faRightToBracket} /> Sign In
                    </button>
                </form>
                {/* <span style={{color:'red'}}>{msg}</span> */}
                <br />
                <br />
                <span style={{color:"white"}}>If You Have Not Register ? <Link to="/register" className="register">Click Here !</Link></span>
                <br />


            </div>
        </div>
    )
}
export default Login;