import React from 'react';
import './App.css';
// import { gitusers } from './gitusers';
import Card from './Card';


const CardUser = ( {gitusers}) => {
    return( 
       <div>
           {gitusers.map((user, i) =>
              
               <Card user={user}
                     key={user.id}
               />
           
           )}
            
       </div>
    )
}

export default CardUser;