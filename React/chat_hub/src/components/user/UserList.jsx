import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WebService from "../service/WebService";
import WebAPI from "../service/WebAPI";

function UserList() {
  const userData = useSelector((state) => state.userData.value);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    loadAllUserData();
  }, []);

  var loadAllUserData = async () => {
    var resp = await WebService.getAPICall(WebAPI.allUserListAPI,userData.token);
    console.log("User List is : " + resp);
    console.log("User List is : " + JSON.stringify(resp));
    if (resp.data.status) {
      setUserList(resp.data.data);
    }
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">User Data List</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <Link to="#">
                <i className="icon-home"></i>
              </Link>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>

            <li className="nav-item">
              <Link to="#">List</Link>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Show Chat User Details</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    id="basic-datatables"
                    className="display table table-striped table-hover"
                  >
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Request</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>S.No</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Request</th>
                      </tr>
                    </tfoot>
                    <tbody>
                    {userList.map((user,index)=>{
                          return<tr>
                              <td>{index+1}</td>
                              <td><img src={user.image} className="rounded" 
                              height={80} width={80}/></td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.phone}</td>
                              <td>{user.gender}</td>
                              <td>
                                <button className="btn btn-danger">Send Request</button>
                              </td>
                          </tr>
                    })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserList;
