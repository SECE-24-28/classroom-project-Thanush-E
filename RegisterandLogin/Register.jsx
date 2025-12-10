import { useState } from "react";
import Login from "./login";
import './styles.css';

function Register(){

    const [Form,setform]=useState({name:"",email:"",phone:"",password:""});
    const [user,setUser]=useState([]);
   
    const [view,setView] = useState("Register");
    const change=(e)=>{
        let {name,value}=e.target;
        setform({...Form,[name]:value});
    }
    
    const submit=(e)=>{
        e.preventDefault();
        if(user.some((x)=>x.email===Form.email)){
            alert("Already Registered");
        }
        else{
            setUser([...user,Form]);
}
        setform({name:"",email:"",phone:"",password:""})     
    }

    // const dele=(id)=>{
    //     setUser(user.filter((e)=>e.roll!=id));    
    // }

    // const up=(id)=>{
    //     let co = user.filter((e)=>e.roll===id);
    //     setform(co[0]);
    //     setupd(id);
    // }


    return(
        <>
        
        {view==="Register" && <form onSubmit={submit}><table ><tbody><tr><td><label>Name</label></td><td><input name="name" value={Form.name} onChange={change} placeholder="Enter Name" required/></td></tr>
            <tr><td><label>Email</label></td><td><input name="email" type="email" value={Form.email} onChange={change} placeholder="Enter Email" required/></td></tr>
            <tr><td><label>Mobile</label></td><td><input name="phone" type="tel" value={Form.phone} onChange={change} placeholder="Enter Mobile Number" required/></td></tr>
            <tr><td><label>Password</label></td><td><input name="password" type="password"  value={Form.password} onChange={change} placeholder="Enter Password" required/></td></tr>
            <tr><td colSpan={2}><input type="submit" /></td></tr>
            <tr><td><p>Already Have an Account</p></td>
                <td><button type="button" onClick={()=>setView("Login")}>Login</button></td></tr>
            </tbody>
        
        </table></form>
            
        
        
        }
        {view==="Login" && <Login details={user}/>}
        
        
        </>
    );
}
export default Register;