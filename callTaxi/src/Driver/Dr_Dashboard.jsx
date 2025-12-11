import { useLocation, useNavigate } from "react-router-dom"

function Dr_Dashboard(){
 let {state} = useLocation();
    let nav = useNavigate();
    const profile=()=>(
        nav("/driver_Dashboard/profile",{state:state[0]})
    )

    
    return(



        <>
        <div className="container-fluid bg-info px-0" ><h1 >Welcome {state[0].name}</h1></div> 
        <button className="btn btn-warning" onClick={profile}>Profile</button>
        </>
    )
}

export default Dr_Dashboard