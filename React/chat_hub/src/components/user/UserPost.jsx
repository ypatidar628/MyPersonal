import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WebService from "../service/WebService";
import WebAPI from "../service/WebAPI";

function UserPost(){

    const userData = useSelector(state=>state.userData.value);
    const [UserPost,setUserPost] = useState([]);

    
    useEffect(()=>{
        loadAllPost();
    })

    var loadAllPost = async()=>{
        var resp = await WebService.getAPICall(WebAPI.allUserPostAPI,userData.token);
        // console.log("posts is :"+resp);
        // console.log("posts is :"+JSON.stringify(resp));

        if(resp.data.status){
            setUserPost(resp.data.data);
        }
        
    }



    return  <div className="container">
    <div className="page-inner">
        <div className="page-header">
            <h3 className="fw-bold mb-3">User Posts</h3>
        </div>
        {UserPost.map((post,index)=>{
              return<div className="row">
              <div className="col-md-12">
                  <div className="card">
                      <div className="card-header">
                          <h4 className="card-title">
                              {post.postBy.name}<br/>
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
}
export default UserPost;