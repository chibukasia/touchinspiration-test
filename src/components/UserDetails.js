import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../images/images.png";
import UserEditForm from "./UserEditForm";

function UserDetails({ users, setUsers }) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    occupation: "",
    bio: "",
  });
  const [show, setShow] = useState(false)

  // Handles the showing and hiding of a form
  function handleShow(){
    setShow(!show)
  }
  // Get the params of the current user
  const params = useParams();

  // GET the user based on the user id from the params
  useEffect(() => {
    fetch(
      `https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user/${params.id}`
    ).then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else {
        response.json().then((error) => console.log(error));
      }
    });
  }, []);
  
  return (
    <div className="edit-form">
      <div className="card" style={{ width: "100%" }}>
        <h2>User Details</h2>
        <img
          src={image}
          className="card-img-top"
          alt={user.name}
          style={{ width: "200px", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.bio}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{user.email}</li>
          <li className="list-group-item">{user.occupation}</li>
        </ul>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={handleShow}>{show ? "Hide": "Edit User"}</button>
        </div>
      </div>
      {show ? <UserEditForm
        user={user}
        id = {params.id}
        setUser={setUser}
        users={users}
        setUsers={setUsers} 
        handleShow= {setShow}
        show = {show}
      />: null }
      
    </div>
  );
}

export default UserDetails;
