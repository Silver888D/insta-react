
import { allUsers } from "./utils/index";

const AllUsers = ({setter})=>{
    
    const clickHandler= async(event)=>{
        
        await allUsers(setter);
    }
    return(
        <div>
        <button onClick={clickHandler}>Click for Total Users</button>
        
        </div>
    );
}

export default AllUsers;