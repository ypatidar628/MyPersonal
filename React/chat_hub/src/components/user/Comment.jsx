import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WebService from "../service/WebService";
import WebAPI from "../service/WebAPI";
import "../../components/user/UserPost.css"


function Comment() {
  const userData = useSelector(state => state.userData.value);
  const [UserPost, setUserPost] = useState([]);
  const [UserListData, setUserListData] = useState([]);

  useEffect(() => {
    loadAllPost();
    loadCommentUser()
  })

  var loadAllPost = async () => {
    var resp = await WebService.getAPICall(WebAPI.allUserPostAPI, userData.token);
    // console.log("posts is :"+resp);
    // console.log("posts is :"+JSON.stringify(resp.data.data));
    if (resp.data.status) {
      setUserPost(resp.data.data);

    }
  }

  var loadCommentUser = async () => {
    var resp = await WebService.getAPICall(WebAPI.allUserListAPI, userData.token)
    setUserListData(resp.data.data)
  }


  return <div className="container">
    <div className="page-inner">
      <div className="page-header">
        <h3 className="fw-bold mb-3">Comments </h3>
      </div>
      {UserPost.map((post, index) => {
         const date = post.postdate;
         const formattedDate1 = new Date(date).toISOString().split("T")[0];

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
            <hr className="hr"/>
            <div className="post-content">
              <p className="description">Description : </p>
              <p className="post-message">{post.message}</p>
                         </div>
                    <br />
<hr />
                    {post.comments.map((p) => {
                      const commenter = UserListData.find(user => p.id == user.id)
                      // console.log(commenter);
                      // const createdAt = new Date(p.createdAt);
                      const date = post.postdate;
                      const formattedDate = new Date(date).toISOString().split("T")[0];
                      return <div className="d_div" key={p.id}>

                        {commenter ?
                          <h5 className="uname">User Name : <span className="commenter">{commenter.name}</span> </h5>
                          : 
                          <span style={{fontSize:'16px'}}>User Not Found : </span>}
                         
                        {/* <b>{p.createdAt ? new Date(p.createdAt).toLocaleString() : 'Date not available'}</b> */}
                        <b className="date">{p.createdAt ? formattedDate : 'not found'}</b>

                        <p><b className="comments">Comment : </b> <b style={{fontSize:'18px', color:'black'}}>{p.comment}</b></p>
                      </div>
                    })}
                  

                
              <button  className="put-link" >Put Your Comments</button>
            
            </div>
            <br /><hr /><br />
          
        </div>)
      })}
    </div>
  </div>
}

export default Comment;
