import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkStatus } from "../redux/userSlice";

function SideBar() {

  // var dispatch = useDispatch();
  // var mainStatus = useSelector(state=>state.userData.value);
  
  // var logoutUser = (event)=>{

  //   event.preventDefault();

         
  //         console.log(mainStatus);
  //         if(mainStatus.isloginStatus){
  //             dispatch(checkStatus(mainStatus.isloginStatus(false)))
  //         }
  //         else{
  //             dispatch(checkStatus(true))
  //         }

  // }




  
  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <Link to="/" className="logo" style={{ color: "white" }}>
            Chat App
          </Link>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-item active">
              <Link
                data-bs-toggle="collapse"
                to="#dashboard"
                className="collapsed"
                aria-expanded="false"
              >
                <i className="fas fa-home"></i>
                <p>User's</p>
                <span className="caret"></span>
              </Link>
              <div className="collapse" id="dashboard">
                <ul className="nav nav-collapse">
                  <li>
                    <Link to="/userHome01">
                      <span className="sub-item">User Home</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/userList">
                      <span className="sub-item">User List</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/userPost">
                      <span className="sub-item">User Post</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/myPost">
                      <span className="sub-item">My Post</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/myProfile">
                      <span className="sub-item">My Profile</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/logout">
                      <span className="sub-item">Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
