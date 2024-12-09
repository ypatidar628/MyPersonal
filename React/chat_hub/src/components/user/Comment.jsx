import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import WebService from "../service/WebService";
import WebAPI from "../service/WebAPI";
import "../../components/user/UserPost.css"
import { Link } from "react-router-dom";


function Comment() {
  const userData = useSelector(state => state.userData.value);
  const [UserPost, setUserPost] = useState([]);
  const [UserListData, setUserListData] = useState([]);
  const [UserCommData, setUserCommData] = useState([]);
  // var navigate = useNavigate();
  var com = useRef({});
// var token = userData.token;
  useEffect(() => {
    loadAllPost();
    loadCommentUser()
    
  },[])

  var loadAllPost = async () => {
    var resp = await WebService.getAPICall(WebAPI.allUserPostAPI, userData.token);
    // console.log("posts is :"+resp);
    // console.log("posts is :"+JSON.stringify(resp.data.data));
    if (resp.data.status) {
      setUserPost(resp.data.data);
      // navigate("/comment")

    }
  }

  var loadCommentUser = async () => {
    var resp = await WebService.getAPICall(WebAPI.allUserListAPI, userData.token)
  
    
    if (resp.data.status){
      setUserListData(resp.data.data)
    }
  }

  //Comment post function
  const sendComment = async (event,id) => {
 
    event.preventDefault();
    var comm = com.current[id].value; 
    // console.log("msg"+comm);

var obj = { comment : comm, post : id  };

 const resp = await WebService.postAPICallUsingUploadData(WebAPI.commentAPI, userData.token, obj);
//  console.log("Response:", resp);
 console.log("Response:", JSON.stringify(resp))
 
 if (resp.data.status) {
   setUserCommData(resp.data.data); 
   // navigate("/comment")
   loadAllPost();
 }
 else{
  console.error("Faield to post comment")
 }

};


  return <div className="container">
    <div className="page-inner">
      <div className="page-header">
        <h3 className="fw-bold mb-3 text">Comments </h3>
      </div>
      {UserPost.map((post, index) => {
         const postdate = new Date(post.postdate);
         const formattedDate1 = `${String(postdate.getDate()).padStart(2, '0')}/${String(postdate.getMonth()).padStart(2, '0')}/${postdate.getFullYear()}`;
        return (
          <div className="posts-container">
        <div className="post-card" key={index}>
        
        <div className="post-header">
              <div className="user-info">
                <h4 className="username">{post.postBy.name}</h4>
                <span className="post-date">{post.postdate ? formattedDate1 : 'not found'}</span>
              </div>
            </div>

        
             
                  
            <div className="post-image">
              <img src={post.postfile} alt="Post" />
            </div>
           
            <div className="post-content">
              <p className="description">Description : </p>
              <p className="post-message">{post.message}</p>
                         </div>
                    <br />

                    {post.comments.map((p) => {
                      
                      const commenter = UserListData.find(user => p.id == user.id)
                    
                      const createdAt = new Date(p.createdAt);
                      const formattedDate = `${String(createdAt.getDate()).padStart(2, '0')}/${String(createdAt.getMonth()).padStart(2, '0')}/${createdAt.getFullYear()}`;

                      return <div className="d_div" key={p.id}>

                        {commenter ?
                          <h5 className="uname">User Name : <span className="commenter">{commenter.name}</span> </h5>
                          : 
                          <span style={{fontSize:'16px'}}>User Not Found : </span>}
                         
                        {/* <b>{p.createdAt ? new Date(p.createdAt).toLocaleString() : 'Date not available'}</b> */}
                        <b className="date">{p.createdAt?formattedDate:'not found'}</b>

                        <p><b className="comments">Comment : </b> <b style={{fontSize:'18px', color:'#395c73'}}>{p.comment}</b></p>
                      </div>
                    })}
                  
<div>
<form onSubmit={(event)=>{
  sendComment(event,post.id)
}} className="form-group">
        <input type="text" className="form-control" placeholder="Enter Your Comment" ref={(el)=>{com.current[post.id]=el}}/>
        <br />
        <br />
        <button type="submit" className="btn btn-success form-control">
          Submit Comment
        </button>
      </form>
</div>
                
              <button  className="put-link" >
                <Link to="/sendComment">Send Comments</Link>
                </button>
            
               
            </div>
            <br /><br />
          
           
        </div>)
      })}
      
    </div>

    {/* comment  post form  */}


  </div>
}

export default Comment;
