import {  useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "../Customer/dashbord";
import Dr_Dashboard from "../Driver/Dr_Dashboard";
function Login(){

    const [form,setForm]=useState({email:"",password:"",type:""})
    let u;
    let navi = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        let url = "";
        
        if (form.type === "Passenger") {
            url = "http://localhost:3000/customers";
        } else if (form.type === "Driver") {
            url = "http://localhost:3001/driver";
        } else if (form.type === "Admin") {
            url = "http://localhost:3002/admin";
        } else {
            alert("Please select a type");
            return;
        }
        console.log(form);
        const response = await axios.get(url);
        const users = response.data;

        const found = users.some(
            (user) =>
                user.email === form.email &&
                user.password === form.password
        );

        u=users.filter((e)=>(e.email===form.email))
        if (found) {
            alert("Login Successfully!");
            console.log(u);
            if(form.type==="Passenger") { navi("/customer_Dashboard",{state:u})}
            else if (form.type === "Driver") { navi("/driver_Dashboard",{state:u})}

        } else {
            alert("Invalid Email or Password");
        }
        setForm({email:"",password:"",type:""})
    }
    const change=(e)=>{
        let {name,value}=e.target;
        setForm({...form,[name]:value});
    }
    return(
        <div className="bg-color-warning">
        <form onSubmit={submit} className="bg-info p-5 rounded">
            <p className="text-center">Login page</p>
            <table>
                <tbody>
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input value={form.email} name="email" className="border-0 rounded" type="email" placeholder="Enter email" onChange={change}/></td>
                    </tr>
                    <tr>
                        <td><label>password:</label></td>
                        <td><input value={form.password} name="password" className="border-0 rounded" type="password" placeholder="Enter currect password" onChange={change}/></td>
                    </tr>
                    <tr>
                        <td><label>Type:</label></td>
                        <td><select name="type" onChange={change} value={form.type}>
                            <option value="" >Select Type</option>
                            <option value="Passenger" >Passenger</option>
                            <option value="Driver">Driver</option>
                            <option value="Admin">Admin</option>
                            </select></td>
                    </tr>
                    <tr><td><input className="btn btn-success" type="submit" /></td></tr>
                    <tr><td >Create Account</td><td><Link to="/register" className="btn text-dark btn-outline-warning">Register</Link></td></tr>
                </tbody>
            </table>
        </form>

        </div>
    )
}

export default Login