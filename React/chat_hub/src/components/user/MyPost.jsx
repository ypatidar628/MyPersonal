import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import WebAPI from "../service/WebAPI";
import WebService from "../service/WebService";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

 function MyPost(){
    
    
  const userData = useSelector(state=>state.userData.value);
  const [myPost,setMyPost] = useState([])
  const navigate = useNavigate();
  
    var msg = useRef();
    var fileData = useRef();

   useEffect(()=>{
      loadMyPostList();
   })

   var loadMyPostList = async ()=>{
      var resp = await WebService.getAPICall(WebAPI.loginUserPost ,userData.token);
    //  console.log("My Post Response is : "+resp);
    //  console.log("My Post Response is : "+JSON.stringify(resp));
     if(resp.data.status)
      {
        //  console.log("Hello.....");
        setMyPost(resp.data.data);
      }
    }

   var uploadPost = async (event)=>{
       event.preventDefault();
       var resp = "";

       var message = msg.current.value;
       var upload_file_post = fileData.current.files[0];
       const f_data = new FormData();

       //If Media Upload
       if(upload_file_post != undefined)
       {
           f_data.append('image',upload_file_post);
           f_data.append('message',message);
           resp = await WebService.postAPICallUsingUploadData(WebAPI.uploadPost,userData.token,f_data);
       }
       else
      {
        //Media No Upload
        var obj = {message:message}
        resp = await WebService.postAPICallUsingUploadData(WebAPI.uploadPost,userData.token,obj);
      }
      console.log("Response is : "+resp);
      console.log("String Response is : "+JSON.stringify(resp));
      if(resp.data.status){
        toast.success("Successfully Post")
      }
      else if (resp.data.status){
        navigate("/myPost")
      }
      clearField();
    }
    var clearField = ()=>{
      
      var message = msg.current.value="";
      var upload_file_post = fileData.current.value="";

     }

    return<div className="container">
     <div className="page-inner">
      <div className="page-header">
        <div className="container"> 
          <h1 style={{textAlign:'center',color:'red'}}>Upload Posts</h1> 
        <form onSubmit={uploadPost}>    
           <div className="row form-group">
             <textarea className="form-control" rows="8" ref={msg} placeholder="Write Any Content"></textarea>
            </div>
            <div className="row form-group">
              <input type="file" className="form-control" ref={fileData}/>
            </div>
            <div className="form-group">
                <button className="btn btn-success form-control" type="submit">
                    Upload Posts
                </button>
            </div>
            </form>  

            <hr/>
            <h1 style={{textAlign:'center',color:'red'}}>
                My Previous Posts
            </h1>
            {myPost.map((post)=>{
              return<div className="row">
              <div className="col-md-12">
                  <div className="card">
                      <div className="card-header">
                          <h4 className="card-title">
                              {post.postdate}<br/>
                          </h4>
                      </div>
                      <div className="card-body">
                          <div className="tab-content mt-2 mb-3" id="pills-tabContent">
                            <div className="row">
                               <div className="col-md-2 well">
                                  <img src={post.postfile} height={80} width={80} className="img-circle"/>
                                </div> 
                                <div className="col-md-10">
                                   <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                      <p>{post.message}</p>
                                   </div>
                                </div>
                            </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        })}
        </div>
      </div>
     </div>
     <ToastContainer/>
    </div>
}
export default MyPost;