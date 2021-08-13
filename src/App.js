import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route, Link}  from "react-router-dom";
import Header from "./Headers/Header";
import TinderCards from "./TinderCards/TinderCards";
import Chats from "./Chats/Chats";
import SwipeButtons from "./SwipeButtons/SwipeButtons";
import ChatScreen from "./ChatScreen/ChatScreen";

function App() {
  return (
    <div className="App">
      
      
      <Router>
     
        <Switch>

        <Route path="/chat/:person">
          <Header backButton = "/chat" />
            <ChatScreen />
          </Route>


          <Route path="/chat">
          <Header backButton = "/" />
            <Chats />
          </Route>
          <Route path="/">
          <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

        </Switch>
        

      </Router>
    </div>
  );
}

export default App;
