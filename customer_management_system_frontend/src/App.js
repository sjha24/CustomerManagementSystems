
import './App.css';
import AddCustomer from './component/AddCustomer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerList from './component/CustomerList';
import { AuthProvider } from './component/auth/AuthProvider';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './component/auth/Login';
import Registration from './component/auth/Registration';
import EditCustomer from './component/EditCustomer';
import CustomSearch from './component/CustomSearch';
import NavBar from './component/NavBar';
import {useEffect, useState } from 'react';

function App() {
  const[token,setToken]= useState("")
  const tokenData = localStorage.getItem("token");
  useEffect(()=>{
    setToken(tokenData);
  },[tokenData,token])
  return (
    <AuthProvider>
      <Router>
        <NavBar/>
        <Routes>

          {token === null ? <Route path='/' element = {<Login/>}/>:
            <Route path='/' element = {<CustomerList/>}/>
          }
          <Route path='/register' element = {<Registration/>}/>
          <Route path='/add-customer' element = {<AddCustomer/>}/>
          <Route path='/edit-customer/:uuId' element = {<EditCustomer/>}/>
          <Route path='/customer-search' element = {<CustomSearch/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
