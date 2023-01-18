import React from "react";
import { Link } from "react-router-dom";
import image from '../images/images.png'

function UserCard({ name, email, occupation, bio, id }) {
  return (
    <div>
        <div className="card">
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ width: "200px", height: "200px" }}
        />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h5 className="card-title">{email}</h5>
            <h5 className="card-title">{occupation}</h5>
            <p className="card-text">{bio}</p>
            <Link to={`/users/${id}`} className="btn btn-primary">
              View details
            </Link>
          </div>
        </div>
    </div>
  );
}

export default UserCard;
