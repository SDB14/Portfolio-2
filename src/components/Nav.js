import React from 'react';
import {NavLink} from 'react-router-dom';
import './Component.css'


function Nav() {
  return (
     <> 
    
   <div className='Nav-Style justify-content-end'>
   <p className='headerName'>Sarita Thomas</p>
   
       <ul className='ulRow'>
           <li>
               <NavLink
               className='Nav-Link'
               activeClassName='active'
               isActive={()=>window.location.pathname === '/About'}

               to='/About'
               >About</NavLink>
           </li>
           <li>
               <NavLink
               className='Nav-Link'
               activeClassName='active'
               isActive={()=>window.location.pathname === '/Contact'}
               to='/Contact'
               >Contact</NavLink>
           </li>
           <li>
               <NavLink
               className='Nav-Link'
               activeClassName='active'
               isActive={()=>window.location.pathname === '/Portfolio'}
               to='/Portfolio'
               >Portfolio</NavLink>
           </li>

           
       </ul>


   </div>
   </>
  );
  
}

export default Nav;