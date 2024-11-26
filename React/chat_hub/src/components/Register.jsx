import { useRef } from "react";

function Register(){
    var name =  useRef();
    var email = useRef();
    var password = useRef();
    var phone = useRef();
    var gender = useRef();

    var registerUser = (event)=>{
        event.preventDefault();
        var nm =name.current.value;
        var em =email.current.value;
        var pass =password.current.value;
        var mob =phone.current.value;
        var gen =gender.current.value;

        var obj
    }
    return <div className="container">
        <div className="row text-center">
            <h1 style={{color:'red' , textShadow:'3px 3px 3px black'}}>Register Here !</h1>
        </div>

        <form onSubmit={registerUser}>
  
        <div className="row form-group">
            <input type="text" className="form-control"  placeholder="Enter User Name" ref={name}/>
        </div>

        <div className="row form-group">
            <input type="text" className="form-control"  placeholder="Enter User Email" ref={email}/>
        </div>

        <div className="row form-group">
            <input type="text" className="form-control"  placeholder="Enter User Password" ref={password}/>
        </div>

        <div className="row form-group">
            <input type="text" className="form-control"  placeholder="Enter User Phone" ref={phone}/>
        </div>

        <div className="row form-group">
            <select className="form-control" ref={gender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        
        <div className="row form-group">
            <input type="submit" className="btn btn-success form-control"  value="Register" />
        </div>
          
        </form>
    </div>
}
 export default Register;