
import { allUsers } from "./utils";

const AllUsers = ({setter})=>{
    
    const clickHandler= async(event)=>{
        
        await allUsers(setter);
    }
    return(
        
        <button onClick={clickHandler}>All Users</button>
    );
}

export default AllUsers;