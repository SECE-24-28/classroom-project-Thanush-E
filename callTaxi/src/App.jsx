
import './App.css'
import Login from './Login_Register/Login'
import {  Route, Routes } from "react-router-dom";
import Register from './Login_Register/Register'
import Dashboard from './Customer/dashbord';
import Profile from './Customer/Profile';
import Dr_Dashboard from './Driver/Dr_Dashboard';
import Dr_Profile from './Driver/Profile';

function App() {
  

  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/customer_Dashboard" element={<Dashboard/>}/>
        <Route path="/driver_Dashboard" element={<Dr_Dashboard/>}/>
        <Route path="/customer_Dashboard/profile" element={<Profile/>}/>
        <Route path="/driver_Dashboard/profile" element={<Dr_Profile/>}/>
      </Routes>
    </>
  )
}

export default App
