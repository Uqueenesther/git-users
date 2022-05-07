import React from 'react';
import './App.css';


const SearchUser = ({searchChange, searchfield}) => {
    return(
        <div >
          
        <input  placeholder='search user' className='search'
        type = 'search'  onChange = {searchChange}
        />
        
      </div>
    )
       
}

export default SearchUser;