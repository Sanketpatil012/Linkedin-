import React , {forwardRef} from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import SendIcon from '@mui/icons-material/Send';
 const  Post =  forwardRef(({name , description , message , photoUrl} , ref ) => {
  return (
    <div className='post' ref={ref}>
         <div className="post__header">
              <Avatar src={photoUrl}/>
             <div className="post_info">
               <h2>{name} </h2>
                <p>{description}</p>
             </div>
          </div>
          <div className="post__body">
             <p>{message}</p>    
        </div>
          <div className="post__buttons">
             <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
             <InputOption Icon={ChatIcon} title="Comment" color="gray" />
             <InputOption Icon={EmergencyShareIcon} title="Share" color="gray" />
             <InputOption Icon={SendIcon} title="Send" color="gray" />
          </div>
     
     </div>
  )
  })

export default Post
