import { useRef } from "react"

function App() {
  var fname = useRef();
  var lname = useRef();
  var sal = useRef();
  var arr =[];

  let getData = ((event)=>{
    event.preventDefault();
    var f_name=fname.current.value;
    var l_name=fname.current.value;
    var salary=fname.current.value;

    var obj ={f_name,l_name,salary};
    var resp = arr.push(obj)
    console.log(obj);
    
    console.log(resp);
    

  })

  return (
    <div className="container p2">
      <br />
      <form className="form-group" onSubmit={getData}>
        <div className="">
          <label className="form-label ">First Name :</label>
          <input type="text" ref={fname} className="form-control" />
        </div><br />
        <div className="mb-3">
          <label className="form-lable">Last Name :</label>
          <input type="text" ref={lname} className="form-control" />
        </div><br />
        <div className="mb-3">
          <label className="form-lable">Salary :</label>
          <input type="text" ref={sal} className="form-control" />
        </div><br />
        <button type="submit" className="btn btn-success mt-3">Submit</button>
      </form>
    </div>
  )
}

export default App
