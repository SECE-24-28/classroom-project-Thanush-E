import { useRef, useState } from "react";
import Register from "./Register";
import './styles.css';

function Login(props){

    const email=useRef("");
    const password=useRef("");
    const [view,setView]=useState("Login")
     

    const submit=(e)=>{
    e.preventDefault();
    if(props.details.some((x)=>(x.email==email.current.value  && x.password===password.current.value)))  {
        alert("Login Successfully")
    }
    else{
        alert("Invalid email or password")
    }
    email.current.value="";
    password.current.value="";
    }


    return (
        <>
        {view==="Login" &&
            <form onSubmit={submit}><table ><tbody><tr><td><label>Email</label></td>
                <td><input name="email" type="email" ref={email}  placeholder="Enter Email" required/></td></tr>
                <tr><td><label>Password</label></td>
                <td><input name="password" type="password"  ref={password}  placeholder="Enter Password" required/></td></tr>
                <tr><td colSpan={2}><input type="submit" /></td></tr>
                <tr><td><p>Create Account</p></td><td><button type="button" onClick={()=>setView("Register")}>Register</button></td></tr>
                </tbody>
                
            </table></form>
            
         
        }
        {view==="Register" && <Register />}
        
        </>
    )

}
export default Login;