import React, { useEffect, useState } from "react";
import "./stylesheets/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../config/firebase-config";

const Feed = () => {

    const [input,setInput] = useState("")
    const [posts,setPosts] = useState([])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
          name: "Aswin CG",
          description: "This is a test",
          message: input,
          photoUrl: "",
        });

    }

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        })
    },[])

  return (
    <div className="feed">
      <div className="feed_input_container">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>

        <div className="feed_input_options">
          <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC1SE"
          />
        </div>
      </div>

        {/*posts*/}
        {posts.map((post)=>(
            <Post/>
        ))}
        <Post name='Aswin CG' description="This is a test" message="wow this worked"/>

    </div>
  );
};

export default Feed;
