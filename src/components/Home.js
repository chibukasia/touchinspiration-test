import React, { useState } from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

function Home({ users }) {
  // Set the current page
  const [currentPage, setCurrentPage] = useState(1);
  // Set the number of users per page to 10
  const [usersPerPage] = useState(6);
  // Get the first and the last index of users on the page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // Get the current users on the page based on the index of the first and last user on the page
  const curretUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  // Calculate the number of pages
  const pages = Math.ceil(users.length / usersPerPage);
  // Map the users arrays to a corresponding array of user components
  const userDisplay = curretUsers.map((user) => {
    return (
      <UserCard
        key={user.id}
        name={user.name}
        email={user.email}
        bio={user.bio}
        occupation={user.occupation}
        id={user.id}
      />
    );
  });
  return (
    <>
      <h2 style={{textAlign: "center", padding: '20px'}}>List of Users</h2>
      <div className="d-flex flex-wrap main">{userDisplay}</div>
      
      <div className="pagination">
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      </div>
    </>
  );
}

export default Home;
