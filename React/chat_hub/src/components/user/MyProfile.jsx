import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import WebService from "../service/WebService";
import WebAPI from "../service/WebAPI";

function MyProfile(){

    const userData = useSelector(state=>state.userData.value);
    const [userProfile,setUserProfile] = useState({});

    var profilePic = useRef();

   useEffect(()=>{
    loadProfile()
   },[])

   var loadProfile = async ()=>{
    var resp = await WebService.getAPICall(WebAPI.loginUserProfile,userData.token);
    // console.log("Profile Resp is : "+resp);
    // console.log("String Profile Resp is : "+JSON.stringify(resp));
    if(resp.data.status)
    {
        setUserProfile(resp.data.data);
    }
   }

   var uploadProfilePic = async (event)=>{
        event.preventDefault();

        const f_data = new FormData();
        var user_profile = profilePic.current.files[0];

        f_data.append('image',user_profile);
        // console.log("Token is : "+userData.token);

        var resp = await WebService.putAPICall(WebAPI.uploadProfilePic,f_data,userData.token);
        // console.log("Upload : "+resp);
        // console.log("Upload String : "+JSON.stringify(resp));
        if(resp.data.status)
        {
            loadProfile()
        }
   }

    return<div className="container">
    <div className="page-inner">
        <div className="page-header">
            <h3 className="fw-bold mb-3">My Profile</h3>
        </div>
        <div className="row">
              <div className="col-md-12">
                  <div className="card">
                      <div className="card-header">
                          <h4 className="card-title">
                              {userProfile.id}<br/>
                          </h4>
                      </div>
                      <div className="card-body">
                          <div className="tab-content mt-2 mb-3" id="pills-tabContent">
                            <div className="row">
                           
                               <div className="col-md-2 well">
                               <form onSubmit={(event)=>{
                                uploadProfilePic(event)
                               }}>    
                                  <img src={userProfile.image} alt="Profile Not Found" height={80} width={80} className="img-circle"/>
                                  <br/><br/>
                                  <input type="file" ref={profilePic}/>
                                  <br/><br/>
                                  <input type="submit" className="btn btn-success" value="Upload Profile"/>
                                  </form>
                                </div>
                                <br/><br/><br/><br/><br/>
                                <div className="col-md-10 container">
                                   <div className="tab-pane fade show active conatiner" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                      <b>{userProfile.name}</b>
                                      <br/><br/>
                                      <b>{userProfile.email}</b>
                                      <br/><br/>
                                      <b>{userProfile.phone}</b>
                                      <br/><br/>
                                      <b>{userProfile.gender}</b>
                                   </div>
                                </div>
                            </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
</div>
}
export default MyProfile;