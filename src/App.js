import React, { useState, useEffect} from 'react';
import CardUser from './CardUser';
import SearchUser from './SearchUser';
import ErrorBoundary from './ErrorBoundary';
import './App.css';



function App() {
  const [gitusers, setGitusers] = useState([])
  const [searchfield, setSearchfield] = useState("")

useEffect(()=>{
  fetch(`https://api.github.com/users`, {
      headers: {
          'Authorization': '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',
      }
  })

    .then(response => response.json())
    .then( users => {setGitusers(users)
    console.log(users);
    });
   
},[])

 
 const onSearchChange = (event) => {
    setSearchfield (event.target.value)
    console.log('searchfield', event.target.value)
}
      
  const FilteredUsers = gitusers.filter(gituser => {
     return gituser.login.toLowerCase().includes(searchfield.toLowerCase())
      })
       
    
    return !gitusers.length ?
    <h1> loading</h1>: 
      (
        <div className = 'tc'>
          <div className ='title'>
              <h1>GITHUB USERS</h1>
            </div>
            < SearchUser searchChange = {onSearchChange}/>
            <ErrorBoundary>
            <CardUser gitusers = {FilteredUsers}/> 
            
            </ErrorBoundary>
            
    
        </div>
      );   
  
}

export default App;