import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WebService from "../service/WebService";
import WebAPI from "../service/WebAPI";
import "../../components/user/Comment.css"

function UserPost() {
  const userData = useSelector((state) => state.userData.value);
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    loadAllPost();
  });

  var loadAllPost = async () => {
    var resp = await WebService.getAPICall(
      WebAPI.allUserPostAPI,
      userData.token
    );
        // console.log("posts is :"+resp);
        // console.log("posts is :"+JSON.stringify(resp));
    // var response = resp.data.data.reverse();
    if (resp.data.status) {
      setUserPost(resp.data.data.reverse());
    }
  };
  

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">User Posts</h3>
        </div>
        {userPost.map((post, index) => {
          const date = post.postdate;
          const date_only = new Date(date).toISOString().split("T")[0];
        //   console.log(post.comments.id);
          

        return (
          <div className="posts-container">
          <div className="post-card" key={index}>
            <div className="post-header">
              <div className="user-info">
                <h4 className="username">{post.postBy.name}</h4>
                <span className="post-date">{date_only}</span>
              </div>
            </div>
            
            <div className="post-image">
              <img src={post.postfile} alt="Post" />
            </div>
            <hr className="hr"/>
            <div className="post-content">
              <p className="description">Description : </p>
              <p className="post-message">{post.message}</p>
              <Link to="/comment" className="comment-link">
                View all comments
              </Link>
            </div>
          </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
export default UserPost;
