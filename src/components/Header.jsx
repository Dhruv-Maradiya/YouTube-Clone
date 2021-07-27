import React from 'react';
import "../css/Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon className="header__left__icon" />
                </IconButton>
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_(2015-2017).svg/1280px-Logo_of_YouTube_(2015-2017).svg.png" alt="logo" />
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__inputButton" />
            </div>
            <div className="header__icons">
                <IconButton className="header__iconButton" >
                    <VideoCallIcon className="header__icon" />
                </IconButton>
                <IconButton className="header__iconButton" >
                    <AppsIcon className="header__icon" />
                </IconButton>
                <IconButton className="header__iconButton" >
                    <NotificationsIcon className="header__icon" />
                </IconButton>
                <Avatar className="header__icon header__Avatar" />
            </div>
        </div>
    )
}

export default Header;
