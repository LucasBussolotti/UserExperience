import './App.css';
import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import UserList from './components/users/UserList/UserList';
import AddUser from './components/users/AddUser/AddUser';
import EditUser from './components/users/EditUser/EditUser';



let  App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={"/"} element= {<Navigate to={"/users/list"}/>}/>
        <Route path={'/users/list'} element={<UserList/>}/>
        <Route path={'/users/add'} element={<AddUser/>}/>
        <Route path={'/users/edit/:userId'} element={<EditUser/>}/> 
      </Routes>
      
    </React.Fragment>
  );
}

export default App;
