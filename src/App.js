import React, {Component} from 'react';
import CardUser from './CardUser';
import SearchUser from './SearchUser';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import { gitusers } from './gitusers';



class App extends Component {
  constructor(){
    super()
    this.state = {
      gitusers : [],
      searchfield: '',
      
    }

  }
  

 componentDidMount() {
   fetch(`https://api.github.com/users`, {
      headers: {
          'Authorization': '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',
      }
  })

    .then(response => response.json())
    .then( users => {
    console.log({users});
      this.setState({gitusers: users})})
      console.log({ 'this gituser':gitusers});
   
    
  }
  
  onSearchChange = (event) => {
    this.setState ({searchfield: event.target.value})
    console.log('searchfield', event.target.value)
}
  
  
  render(){
      const {gitusers, searchfield} = this.state;
      const FilteredUsers = gitusers.filter(gituser => {
      // console.log({gituser});
        return gituser.login.toLowerCase().includes(searchfield.toLowerCase())
      })
       
    
    return !gitusers.length ?
    <h1> loading</h1>: 
    (
       <div className='tc'>
         <div className='title'>
            <h1>GITHUB USERS</h1>
          </div>
          < SearchUser searchChange = {this.onSearchChange} />
           <ErrorBoundary>
          <CardUser gitusers = {FilteredUsers}/> 
          </ErrorBoundary>
          
  
       </div>)   
  }
}

export default App;