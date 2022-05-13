import React from 'react';
import './App.css';

const Card = ({user, id}) => {
    
    return( 
            <div className= 'cardstyle'>
                <div className='shrink'> <img alt='Users' src={`https://avatars.githubusercontent.com/u/${user.id}?v=4`}
                 style={{width:'14em', }} /></div>
                    <div>
                    <h1> {user.login} </h1>
                    <p> followers: {user.id}</p>
                    <a href= {user.html_url} target="_blank">
                        <button className='button'> click to view profile</button>
                    </a>
                    
                </div>
            </div>

       
       
    )
}

export default Card;