import React from 'react';
import { useDispatch } from 'react-redux';
import "../css/SidebarRow.css";
import { log_out } from '../redux/actions/auth.action';

const SidebarRow = ({ drawer, selected, title, Icon, hideonsmalldevice }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        if (title === "Log Out") {
            dispatch(log_out())
        }
    }
    return (
        <div className={drawer ? selected ? "drawersidebarrow selectedRow" : "drawersidebarrow" : selected ? "sidebarrow selectedRow" : hideonsmalldevice ? "hideonsmalldevice sidebarrow" : "sidebarrow"} onClick={handleClick} >
            <Icon className={drawer ? "drawersidebarrow__icons" : "sidebarrow__icon"} />
            <h2 className={drawer ? "drawersidebarrow__text" : "sidebarrow__text"}>{title}</h2>
        </div >
    )
};

export default SidebarRow;
