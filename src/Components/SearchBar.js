import React, { useState} from 'react';
import './Serach.css';
function SearchBar(){
    const [searchItem,setSearchItem] = useState('');
    const[isActive , setIsActive] =useState(false);

    const handleChange = (event) =>{
        setSearchItem(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Search term:', searchItem);
    };

    const handelFoucs =() =>{
        setIsActive(true);
    };

    const handleBlur = () =>{
      setIsActive(false);
    }
    return(
        <div className='search-bar-Container'>
            <form onSubmit={handleSubmit} onFocus={handelFoucs} onBlur={handleBlur}  className={`search-bar ${isActive ? 'active' : ''}`}>
            <input type="text"placeholder="Search-Food" value={searchItem} onChange={handleChange} />
            <button type="submit">Search</button>
            </form>
        </div>
    );
}
export default SearchBar;