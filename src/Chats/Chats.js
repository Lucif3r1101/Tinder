import React from 'react'

import "./Chats.css";
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat 
              name = "Selina Kyle"
              message = "How are you?"
              timestamp = "35 minutes ago"
              profilePic ="https://th.bing.com/th/id/OIP.OhtRVOGsVizXwlwE8cdX6wHaEO?pid=ImgDet&rs=1"
              
            />
            
            <Chat 
              name = "Pepper Potts"
              message = "Where are you?"
              timestamp = "30 minutes ago"
              profilePic = "https://image.pngaaa.com/477/3616477-middle.png"
            />

            
        </div>
    )
}

export default Chats
