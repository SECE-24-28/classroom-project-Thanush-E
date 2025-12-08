import { useState } from "react"
import "./App.css"


function Form(){
    let [remain,setRemain]=useState([]);
    const [name,setname] = useState("");
    const [surname,setsurname] = useState("");
    const [phone,setphone] = useState("");
    const [age,setAge]=useState("");
    const [gender,setgender]=useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        setRemain([...remain,{name,surname,phone,age,gender}])
        console.log(remain);
        setname("");
        setsurname("");
        setphone("");
        setAge("");
        setgender("");
    }

    return(
        <>
        <form onSubmit={handlesubmit} className="mainForm">
            <h1>Registration for Thiran</h1>
            <table>
                <tbody>
                <tr>
                    <td><label >Name:</label></td>
                    <td><input type="Text" value={name} onChange={(e)=>setname(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><label >SurName:</label></td>
                    <td><input type="Text" value={surname} onChange={(e)=>setsurname(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><label>Phone:</label></td>
                    <td><input type="tel" value={phone} onChange={(e)=>setphone(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><label>Age:</label></td>
                    <td><input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><label > Gender:</label></td>
                    <td><select value={gender} onChange={(e) => setgender(e.target.value)}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                </td>
                </tr>
                <tr >
                    <td colSpan={2}><input type="submit"></input></td>
                </tr>
                </tbody>
            </table>
        </form>
        {remain.length>0 && 
        <table className="Display">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>SurName</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    remain.map((e)=>(
                        <tr key={e.phone}>
                            <td>{e.name}</td>
                            <td>{e.surname}</td>
                            <td>{e.phone}</td>
                            <td>{e.age}</td>
                            <td>{e.gender}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>}
        </>
    )
}

export default Form;