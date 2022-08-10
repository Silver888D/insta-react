import { useState } from "react";
import { allUsers } from "./utils";

const AllUsers = ({setter})=>{
    const [users, setUsers] = useState();
    const clickHandler= async(event)=>{
        
        await allUsers(users, setter);
    }
    return(
        
        <button onClick={clickHandler}>All Users</button>
    );
}

export default AllUsers;