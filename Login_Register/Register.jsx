import {  useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Register(){

    const [form,setForm]=useState({name:"",email:"",raid:[],password:""})
    
    

    const submit = async (e) => {
        e.preventDefault();

        let url = "http://localhost:3000/customers";

        const response = await axios.get(url);
        const users = response.data;

        const found = users.some(
            (user) =>
                user.email === form.email 
        );

        if (found) {
            alert("Already Registered");
        } else {
            axios.post(url,form);
            alert("Registered Successfully");
        }
        setForm({name:"",email:"",password:""})
    }
    const change=(e)=>{
        let {name,value}=e.target;
        setForm({...form,[name]:value});
    }
    return(
        <div className="bg-color-warning">
        <form onSubmit={submit} className="bg-info p-5 rounded">
            <p className="text-center">Register page</p>
            <table>
                <tbody>
                    <tr>
                        <td><label>Name:</label></td>
                        <td><input value={form.name} name="name" className="border-0 rounded" type="text" placeholder="Enter your name" onChange={change}/></td>
                    </tr>
                    <tr>
                        <td><label>Email:</label></td>
                        <td><input value={form.email} name="email" className="border-0 rounded" type="email" placeholder="Enter email" onChange={change}/></td>
                    </tr>
                    <tr>
                        <td><label>password:</label></td>
                        <td><input value={form.password} name="password" className="border-0 rounded" type="password" placeholder="Enter password" onChange={change}/></td>
                    </tr>
                    
                    <tr><td><input className="btn btn-success" type="submit" /></td></tr>
                    <tr><td >Already have an Account</td><td><Link to="/" className="btn text-dark btn-outline-warning">Login</Link></td></tr>
                </tbody>
            </table>
        </form>

        </div>
    )
}

export default Register