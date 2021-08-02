import React from 'react';
import "../css/Recommended/Recommended.css";
import CategoryBar from "./CategoryBar";
import Video from './Video';

const Recommended = () => {
    return (
        <div className="recommended">
            <CategoryBar />
            <div className="recommended__videos">
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div>
        </div>
    )
}

export default Recommended;
