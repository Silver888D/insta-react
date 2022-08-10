import './App.css';

const Header =()=>{
    return (<div className='Header'>
        <h3 className='title'>Instagram</h3>
        <input placeholder="Search" className='SearchBar'></input>
        <h5 className='icons'>
        house
        message
        add
        location
        favourites
        profile
        </h5>
        </div>);
}

export default Header;