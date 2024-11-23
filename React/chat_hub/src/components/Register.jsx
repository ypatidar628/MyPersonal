import { useRef } from "react";

function Register(){
    var name =  useRef();
    var email = useRef();
    var password = useRef();
    var phone = useRef();
    var gender = useRef();

    return <div className="container">
        <div className="row text-center">
            <h1 style={{color:'red' , textShadow:'3px 3px 3px black'}}>Register Here !</h1>
        </div>
        <form>
  
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
            <select className="form-control" name={gender}>
                <option>Male</option>
                <option>Female</option>
            </select>
        </div>
        
        <div className="row form-group">
            <input type="submit" className="btn btn-success form-control"  value="Register" />
        </div>
          
        </form>
    </div>
}
 export default Register;