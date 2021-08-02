import React from 'react';
import "../css/Video/video.css"
// import VisibilityIcon from '@material-ui/icons/Visibility';

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src="https://i.ytimg.com/vi/Mos5QJAje28/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCFbVeOdpHjPmjEkLBCOpvPJC5eMg" alt="" />
                <span>5:43</span>
            </div>
            <div className="video__title">
                <img src="https://yt3.ggpht.com/ytc/AKedOLQOx-f1zXUD0noAXesqkqSPq9RDBb6Pg-zGH9H8=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <p>React Js With Firebase and Make fully function YouTube Clone and Host it On Firebase For Free</p>
            </div>
            <div className="video__channel">
                <p>CodeWithDhruv</p>
            </div>
            <div className="video__details">
                <p>19K views • 6 months ago</p>
            </div>
        </div>
    )
}

export default Video;
