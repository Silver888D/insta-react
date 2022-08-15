
import findusers  from "./utils";

const ListUsers = ({setter})=>{
    
    const clickHandler= async(event)=>{
        
        await findusers(setter);
    }
    return(
        <div>
        <button onClick={clickHandler}>Click for Total Users</button>
        
        </div>
    );
}

export default ListUsers;