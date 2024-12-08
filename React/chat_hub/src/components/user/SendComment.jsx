import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import WebService from "../service/WebService";
import WebAPI from "../service/WebAPI";
import { useNavigate } from "react-router-dom";

function SendComment() {
  const userData = useSelector((state) => state.userData.value);
  const [userPost, setUserPost] = useState([]);
  const com = useRef();
var navigate = useNavigate();
  
  const sendComment = async (event) => {
    event.preventDefault(); 
    const comm = com.current.value; 

    if (!comm.trim()) {
      console.log("Comment is empty");
      return; 
    }

    console.log(comm);

    
    const obj = { comment: comm, post: userData.sender };

    try {
      
      const resp = await WebService.postAPICall_second(WebAPI.commentAPI, userData.token, obj);
      console.log("Response:", resp);
      console.log("Response:", JSON.stringify(resp))
      if (resp.data.status) {
        setUserPost(resp.data.data); 
        // navigate("/comment")
      }
    } catch (error) {
      console.error("Error sending comment:", error);
    }
  };

  return (
    <div className="container">
      <h1>Send Comment</h1>
      <form onSubmit={sendComment}>
        <textarea placeholder="Enter Your Comment" ref={com}></textarea>
        <br />
        <br />
        <button type="submit" className="btn btn-success">
          Submit Comment
        </button>
      </form>
    </div>
  );
}

export default SendComment;
