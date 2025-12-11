import { useLocation } from "react-router-dom"

function Dr_Profile(){

    let {state}=useLocation();
    // let u=state.raid 
    return(
        <>
        <h1>Hi {state}</h1>
        {/* <p>{u.length==0 &&
    "Start your Raid"}</p>
    <h3>{u.length>0 && "Your Raids:"}</h3>
        {u.length>0  && u.map((e,i)=>(<p key={i}>{e}</p>))} */}
        
        </>
    )
}

export default Dr_Profile