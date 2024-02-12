
//https://github.com/shivendradb/LinkedIn-clone/blob/main/src/components/Feed.js



import React, { useState , useEffect } from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOption';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from  './firebase'
import firebase from 'firebase/compat/app';
import { selectUser } from './features/userSlice';
 import { useSelector } from 'react-redux';
 import FlipMove from 'react-flip-move';
function Feed() {

  const user= useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Retrieve the data from the database
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    //Push the data to the database
    db.collection("posts").add({
      name:user.displayName,
      description:user.email,
      message: input,
      photoUrl: user.photoUrl || "" ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button type="submit" onClick={submitHandler}>
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOptions Icon={BurstModeIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      <FlipMove>
      {posts.map(
          ({ id, data: { name, description, message, photoUrl, timestamp } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
         
            />
          
          
            )
        )}


      </FlipMove>
        
      
    </div>
  );
}

export default Feed;