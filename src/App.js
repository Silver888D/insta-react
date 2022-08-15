import {useState, useEffect} from 'react';
import './App.css';
import Box from './box';
import Other from './Other';
import Header from './header';
import Snap from './cmpnts/snap';
import SignupOrLogin from './cmpnts/signupOrLogin';
import ListUsers from './cmpnts/listUsers';
import DeleteUser from './cmpnts/userDelete';
import UpdateUser from './cmpnts/userUpdate';


function App() {
  const [user, setUser]= useState('')
  const [tmpUser, setTmpUser]= useState('')
  const [age, setAge]= useState('')
  const [pics, setPics]= useState([]);
  const [display, setDisplay]= useState(false);
  const [users, setUsers]= useState(['']);
  const [del, setDel]= useState();
  const [upd, setUpd]= useState();

  const changeName=()=>{setUser('Harry');}
  const changeUser = (myName, fred) =>{fred(myName);}
  const changeAge = (myAge, tempAge)=>{tempAge(myAge);}
  
  // const myArray = [{name:'Fred'}, {name:'George'}, {name:'Harry'}, {name:'Ginny'}];

  const fetchPics = async()=>{
    const res = await fetch('https://picsum.photos/v2/list');
    const pictures = await res.json();
    setPics(pictures);console.log(pictures);
  } 
  useEffect(()=>{fetchPics();console.log(pics);}, [user])

  // for (let i =0; i< myArray.length; i++){console.log(myArray[i].name);}- use map instead

  // myArray.map((item, index)=>{console.log(item.name);})

  return (
    <div className="App">
      <Header></Header>
      <div className='mainpage'>
      <SignupOrLogin setter={setUser}></SignupOrLogin>
      
      
      {user ? <div><h1>{user} logged in</h1>
      <ListUsers setter={setUsers} /> {users} 
      <Snap></Snap>
      <DeleteUser setter={setDel}>User deleted: {del}</DeleteUser>
      <UpdateUser setter={setUpd}>User updated: {upd}</UpdateUser>
      <button onClick={(event)=>{setDisplay(!display)}}>images</button>
      {display && pics.map((item, index)=>{
        return (<div>
          <h3>{item.author}</h3>
          <img alt='pic' src={item.download_url}></img>
        </div>)
      })}</div>: <h1>not logged in</h1>}
      {/* <Box personsName='Seb' age='154 and a bit'></Box>
      <Other followers='50.4K' posts='1685' following='1024'></Other>
      <Box personsName='Amos' age='4'></Box>
      <Other followers='80.7K' posts='4563' following='2057'></Other>
      <button onClick={()=>changeName()}></button>
      <Box personsName={user}></Box>
      <form>
        <input onChange={(event)=>changeUser(event.target.value, setTmpUser)}/>
        <input onChange={(event)=>changeAge(event.target.value, setAge)}/>
        <button onClick={(event)=>{event.preventDefault(); setUser(tmpUser, age)}}>Change Name</button>
      </form>

      {user && <Box personsName={user} age={age}/>}
      {user ? <h1>User logged in</h1>: <h1>User not logged in</h1>} */}
    </div> 
    </div>
  );
}

// onChange={(event)=>setUser(event.target.value)}

export default App;
