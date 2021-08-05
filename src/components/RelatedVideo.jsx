import React from 'react';
import "../css/RelatedVideo/RelatedVideo.css";

const RelatedVideo = () => {
    return (
        <div className="relatedVideo">
            <div className="relatedVideo__thumbnail">
                <img src="https://i.ytimg.com/vi/Jl7V0ZIOmw4/mqdefault.jpg" alt="" srcset="" />
                <span>5:15</span>
            </div>
            <div className="relatedVideo__info">
                <h4>Compele Redux Tutorial In Hindi And Lots of Fun Friends,GuysCompele Redux Tutorial In Hindi And Lots of Fun Friends,Guys</h4>
                <h6>Thapa Technical</h6>
                <span>65K Views • 3 months ago</span>
            </div>
        </div>
    )
}

export default RelatedVideo;
