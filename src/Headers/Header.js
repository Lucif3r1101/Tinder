import React from 'react';
import './Header.css';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from '@material-ui/core';
import {BrowserRouter as Router , Switch, Route, useHistory, Link}  from "react-router-dom";
import MessageIcon from '@material-ui/icons/Message';

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className="header____icon" />
                </IconButton>

                )}
            
            <Link to="/">
            <img 
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
                alt=""
            />
            </Link>

            <Link to="/chat">
            <IconButton>
                <MessageIcon fontSize="large" className="header_icon" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
