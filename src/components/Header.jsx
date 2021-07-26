import React from 'react';
import "../css/Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_(2015-2017).svg/1280px-Logo_of_YouTube_(2015-2017).svg.png" alt="logo" />
            </div>
            <div className="header__input">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__icons">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;
