import React, { useState } from "react";

function UserEditForm({user, show, handleShow, users, setUsers, id}) { 
  // set the state to hold the current user data
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    occupation: user.occupation,
    bio: user.bio,
  }) 

  // Update the state based on what the user types in the text fields
  function handleChange(e){
    let name =e.target.name;
    let value = e.target.value;

    setFormData({...formData, [name]: value})
  }
  // UPDATE a user 
  function handleSubmit(e){
    e.preventDefault()
    fetch(`https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user/${id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: formData.name, email: formData.email, bio: formData.bio, occupation: formData.occupation})
    })
    .then(response=>{
        if(response.ok){
            response.json().then(data=>{
                // Loop through the users and update the user that matches the id and then return an arrays of users together with the updated user
                const updatedUsers = users.map(user=>{
                    if(user.id===data.id){
                        return data
                    }else{
                        return user
                    }
                }) 
                // Update the list of users
                setUsers(updatedUsers)
            })
        }else{
            response.json().then(console.log)
        }
        // Close the form
        handleShow(!show)
    })
  }
  return (
    <div className="edit-form">
        <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <h2>Edit User</h2>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          value={formData.name}
          placeholder="Your name"
          onChange={handleChange}
        />
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          placeholder="name@example.com"
          onChange={handleChange}
        />
        <label htmlFor="occupationa" className="form-label">
          Occupation
        </label>
        <input
          type="text"
          className="form-control"
          name="occupation"
          id="occupation"
          value={formData.occupation}
          placeholder="Your occupation"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Bio 
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={formData.bio}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">Update</button>
      </div>
      </form>
    </div>
  );
}

export default UserEditForm;
