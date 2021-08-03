import React from 'react';
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
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { log_out } from '../redux/actions/auth.action';

const Drawer = ({ drawer, toggledrawer }) => {
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(log_out())
    }
    const hideDrawer = () => {
        document.getElementsByClassName("drawer")[0].classList.remove("open");
        document.getElementsByClassName("drawer")[0].classList.add("close");
    }
    return (
        <div className={drawer ? "drawer open" : "drawer close"} onClick={hideDrawer}>
            <div className="drawerheader">
                <IconButton onClick={() => { toggledrawer() }}>
                    <MenuIcon className="drawer__menuIcon" />
                </IconButton>
                <img className="drawer__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_(2015-2017).svg/1280px-Logo_of_YouTube_(2015-2017).svg.png" alt="logo" />
            </div>
            <div className="drawersidebar">
                <SidebarRow drawer={true} selected={true} title="Home" Icon={HomeIcon} />
                <SidebarRow drawer={true} title="Trending" Icon={WhatshotIcon} />
                <SidebarRow drawer={true} title="Subcription" Icon={SubscriptionsIcon} />
                <hr />
                <SidebarRow drawer={true} title="Library" Icon={VideoLibraryIcon} />
                <SidebarRow drawer={true} title="History" Icon={HistoryIcon} />
                <SidebarRow drawer={true} title="Your Video" Icon={OndemandVideoIcon} />
                <SidebarRow drawer={true} title="Watch Later" Icon={WatchLaterIcon} />
                <SidebarRow drawer={true} title="Liked Video" Icon={ThumbUpOutlinedIcon} />
                <SidebarRow drawer={true} title="Show more" Icon={ExpandMoreOutlinedIcon} />
                <hr />
                <SidebarRow drawer={true} title="Log Out" Icon={ExitToAppIcon} onClick={logOutHandler} />
            </div>
        </div>
    )
}

export default Drawer;
