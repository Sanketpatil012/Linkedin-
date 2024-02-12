import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function Sidebar() {
  
  const user= useSelector(selectUser);

  
  
  
  return (
    <div className='sidebar'>
       <div className="sidebar__top">
         <img src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGNvbG9yfGVufDB8fDB8fHww" alt="" />
          <Avatar src={user.photoUrl}  className='sidebar__avatar'>{user.email[0]}</Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email }</h4>
       </div>
        <div className="sidebar__stats">
           <div className="sidebar__stat">
             <p>Who viewed you</p>
             <p className='sidebar__statNumber'>2,543</p>
            </div>   
            <div className="sidebar__stat">
            <p>Views on Post</p>
            <p className='sidebar__statNumber'>2,443</p>
            </div> 
        </div>
        <div className="sidebar__bottom">
        <p>Recent</p>
        <div className="sidebar__recentItem">
       <span className="sidebar__hash">
        #
       </span>
       <p>reactjs </p>
        
       <span className="sidebar__hash">
        #
       </span>
       <p>softwareProgramming</p>       
   
       <span className="sidebar__hash">
        #
       </span>
       <p>Programmming</p>
       <span className="sidebar__hash">
        #
       </span>
       <p>Design</p>
       <span className="sidebar__hash">
        #
       </span>
       <p>Devloper</p>
     
  
     </div>
        </div>
    
    </div>
  )
}

export default Sidebar
