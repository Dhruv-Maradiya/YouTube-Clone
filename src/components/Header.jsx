import React, { useState, useEffect } from 'react';
import "../css/Header/Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [value, setValue] = useState("");
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        if (width >= 331 && document.getElementsByClassName("header__close")[0].style.display !== "none") {
            document.getElementsByClassName("header__left")[0].style.display = "flex";
            document.getElementsByClassName("header__icons")[0].style.display = "flex";
            document.getElementsByClassName("header__close")[0].style.display = "none";
            const input = document.getElementsByClassName("header__input")[0];
            input.style.display = "none";
            input.style.width = "unset";
            input.children[0].style.flex = "1";
        }
    }, [width]);
    window.addEventListener("resize", () => { setWidth(window.innerWidth) });
    const responiveSearch = () => {
        document.getElementsByClassName("header__left")[0].style.display = "none";
        document.getElementsByClassName("header__icons")[0].style.display = "none";
        document.getElementsByClassName("header__close")[0].style.display = "inline-block";
        const input = document.getElementsByClassName("header__input")[0];
        input.style.display = "flex";
        input.style.width = "100vw";
        input.children[0].style.flex = "1";
    }
    const responiveSearchClose = () => {
        document.getElementsByClassName("header__left")[0].style.display = "flex";
        document.getElementsByClassName("header__icons")[0].style.display = "flex";
        document.getElementsByClassName("header__close")[0].style.display = "none";
        const input = document.getElementsByClassName("header__input")[0];
        input.style.display = "none";
        input.style.width = "unset";
    }
    const sidebarSwap = () => {
        console.log(document.getElementById("sidebar").style)
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton onClick={sidebarSwap}>
                    <MenuIcon className="header__menuIcon" />
                </IconButton>
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_(2015-2017).svg/1280px-Logo_of_YouTube_(2015-2017).svg.png" alt="logo" />
            </div>
            <div className="header__input">
                <div className="header__inputArea">
                    <input value={value} type="text" placeholder="Search" onChange={e => setValue(e.target.value)} />
                    <SearchIcon className="header__inputButton" />
                </div>
                <IconButton>
                    <MicIcon className="header__mic header__icon" />
                </IconButton>
                <IconButton className="header__close" style={{ display: "none" }} onClick={responiveSearchClose} >
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="header__icons">
                <IconButton style={{ display: "none" }} className="responsive__search" onClick={responiveSearch} >
                    <SearchIcon className="header__inputButton" />
                </IconButton>
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
