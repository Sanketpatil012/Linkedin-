import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';
const Header = () => {
    // building the logOut functionality. 
   const dispatch =useDispatch();
 
     const logOutApp = ()=>{
      dispatch(logout()) 
      
      auth.signOut();
     
    }
 
  return (
    <div  className='header'>
      
         <div className="header_left">
          <img src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" alt="" />
          
           <div className="header_search">
             <SearchIcon/>
            <input type="text"  placeholder='search'/>

           </div>
        
         </div>
          <div className="header_right">
             <HeaderOption Icon={HomeIcon} title='Home'/>
             <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
             <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
             <HeaderOption Icon={ChatIcon} title='Message'/>
             <HeaderOption Icon={NotificationsIcon} title='Notification'/>          
             <HeaderOption  avatar={true}   title='me' onClick={logOutApp}/>
          </div>
    </div>
  )
}

export default Header
