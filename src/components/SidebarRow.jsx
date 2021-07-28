import React from 'react';
import "../css/SidebarRow.css";

const SidebarRow = ({ drawer, selected, title, Icon, hideonsmalldevice }) => {
    return (
        <div className={drawer ? selected ? "drawersidebarrow selectedRow" : "drawersidebarrow" : selected ? "sidebarrow selectedRow" : hideonsmalldevice ? "hideonsmalldevice sidebarrow" : "sidebarrow"}>
            <Icon className={drawer ? "drawersidebarrow__icons" : "sidebarrow__icon"} />
            <h2 className={drawer ? "drawersidebarrow__text" : "sidebarrow__text"}>{title}</h2>
        </div >
    )
};

export default SidebarRow;
