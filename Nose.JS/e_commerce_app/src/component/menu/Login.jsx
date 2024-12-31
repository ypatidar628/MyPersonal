import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    let email = useRef();
    let password = useRef();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="log-container1">
            <div className="login-container">
                <div className="row text-center">
                    <h1 className="login-title">
                        Login Here <FontAwesomeIcon icon={faRightToBracket} />
                    </h1>
                </div>
                <form
                    onSubmit={(event) => {
                        loginUser(event);
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="email" className="label">
                            Email Address <FontAwesomeIcon icon={faEnvelope} />
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input1"
                            placeholder="Enter your email"
                            ref={email}
                            required
                            aria-describedby="emailError"
                        />
                        <div className="error" id="emailError">
                            Please enter a valid email address
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <div className="input-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="input1"
                                placeholder="Enter your password"
                                ref={password}
                                required
                                aria-describedby="passwordError"
                            />
                            <button
                                type="button"
                                className="toggle-password-btn"
                                onClick={togglePasswordVisibility}
                                aria-label="Toggle password visibility"
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                        <div className="error" id="passwordError">
                            Password must be at least 6 characters
                        </div>
                    </div>
                    <button type="submit" className="button">
                        <FontAwesomeIcon icon={faRightToBracket} /> Sign In
                    </button>
                </form>
                <br />
                <br />
                <span style={{ color: "white"  }}>
                    If You Have Not Register ? <Link to="/register" className="register">
                        Click Here!
                    </Link>
                </span>
                <br />
            </div>
        </div>
    );
}

export default Login;
