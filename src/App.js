import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import UserDetails from './components/UserDetails';

function App() {
  // Set the states 
  const [users, setUsers] = useState([])

  // GET all the users 
  useEffect(()=>{
    fetch('https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users')
    .then(response=>{
      if(response.ok){
        response.json().then(users=>setUsers(users))
      }else{
        response.json().then(error=>console.log(error))
      }
    })
  },[])


  return (
    <div className="App">
     <Routes>
      <Route exact path='/' element={<Home users={users}/>}/>
      <Route exact path='/users/:id' element = {<UserDetails users={users} setUsers={setUsers}/>}/>
     </Routes>
    </div>
  );
}

export default App;
