import React from 'react'
import {BrowserRouter as Router , Switch, Route, Link}  from "react-router-dom";
import "./Chats.css";
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat 
              name="Selina Kyle"
              message = "How are you?"
              timestamp = "35 minutes ago"
              profilePic="https://th.bing.com/th/id/OIP.OhtRVOGsVizXwlwE8cdX6wHaEO?pid=ImgDet&rs=1"
            />

            
        </div>
    )
}

export default Chats
