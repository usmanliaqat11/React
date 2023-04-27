import React from 'react'
import input from './input';

function login()
{
    return (
         <form className="form">

            <input
            type="text"
            placeholder='username'/>

                <input
                type="password"
                placeholder='password'/>

  {/* //<input type="text" placeholder="username"/>  */}
  {/* //<input type="password" placeholder="password"/> */}
  <button type="submit">login</button> 
  </form> 
    )
}

export default login;