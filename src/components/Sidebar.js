import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {

    const recentItem = (topic) => {
        return(

        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
        )
    }


  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://preview.redd.it/52f61nfzmwl51.jpg?width=960&crop=smart&auto=webp&s=b08ad60a4bfa056423ee769fa10a20e1ce49a8a1"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Aswin CG</h2>
        <h4>aswincg@gmail.com</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_stat_number">2,543</p>
        </div>

        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_stat_number">4,236</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar