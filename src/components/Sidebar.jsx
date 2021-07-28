import React from 'react'
import "../css/Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar" id="sidebar" >
            <SidebarRow selected={true} title="Home" Icon={HomeIcon} />
            <SidebarRow title="Trending" Icon={WhatshotIcon} />
            <SidebarRow title="Subcription" Icon={SubscriptionsIcon} />
            <hr />
            <SidebarRow title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title="History" Icon={HistoryIcon} />
            <SidebarRow title="Your Video" Icon={OndemandVideoIcon} hideonsmalldevice />
            <SidebarRow title="Watch Later" Icon={WatchLaterIcon} hideonsmalldevice />
            <SidebarRow title="Liked Video" Icon={ThumbUpOutlinedIcon} hideonsmalldevice />
            <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon} hideonsmalldevice />
            <hr />
        </div>
    )
}

export default Sidebar;
