import { useState } from "react";
import { updateuser }  from "../utils";

const UpdateUser = ({setter})=>{
    const [username, setUsername] = useState();
    const [old_password, setPassword]= useState();
    const [new_username, setNewUsername] = useState();
    const [email, setNewEmail]= useState();
    const [password, setNewPassword]= useState();
    const submitHandler= async(event)=>{
        event.preventDefault();
        await updateuser(username, old_password, new_username, email, password, setter);
    }
    return(
        
        <form onSubmit={submitHandler}>
            <label>Username and password of user to update:</label><br></br>
            <input onChange={(event)=>setUsername(event.target.value)} placeholder="Username"></input><br></br>
            <input onChange={(event)=>setPassword(event.target.value)} placeholder="oldpassword"></input><br></br>

            <label>Please enter new account details:</label><br></br>
            <input onChange={(event)=>setNewUsername(event.target.value)} placeholder="Username"></input><br></br>
            
            <input onChange={(event)=>setNewEmail(event.target.value)} type='email' placeholder="Email"></input><br></br>
            <input onChange={(event)=>setNewPassword(event.target.value)} placeholder="Password"></input><br></br>
            <button type="submit">Submit</button>
            
        </form>
    );
}

export default UpdateUser;