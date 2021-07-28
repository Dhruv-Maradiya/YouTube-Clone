import React from 'react';
import "../css/SidebarRow.css";

const SidebarRow = ({ selected, title, Icon }) => {
    return (
        <div className={`sidebarrow ${selected && "selectedRow"}`}>
            <Icon className="sidebarrow__icon" />
            <h2 className="sidebarrow__text">{title}</h2>
        </div>
    )
};

export default SidebarRow;
