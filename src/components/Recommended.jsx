import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../css/Recommended/Recommended.css";
import { getPopularVideos } from '../redux/actions/videos.actions';
import CategoryBar from "./CategoryBar";
import Video from './Video';

const Recommended = () => {
    const { videos } = useSelector(state => state.homeVideos)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch])

    return (
        <div className="recommended">
            <CategoryBar />
            <div className="recommended__videos">
                {videos.map((video) => {
                    return <Video video={video} key={video.id} />
                })}
            </div>
        </div>
    )
}

export default Recommended;
