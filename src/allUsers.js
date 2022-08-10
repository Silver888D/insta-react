
import { allUsers } from "./utils";

const AllUsers = ({setter})=>{
    
    const clickHandler= async(event)=>{
        
        await allUsers(setter);
    }
    return(
        
        <button onClick={clickHandler}>Click for Total Users</button>
    );
}

export default AllUsers;