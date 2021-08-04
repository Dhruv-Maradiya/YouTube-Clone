import React from 'react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import "../css/Recommended/Recommended.css";
import { getPopularVideos, getVideosByCategory } from '../redux/actions/videos.actions';
import CategoryBar from "./CategoryBar";
import Video from './Video';

const Recommended = () => {
    const { videos, activeCategory } = useSelector(state => state.homeVideos)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPopularVideos());
    }, [dispatch])
    const fetchData = () => {
        if (activeCategory === "All") {
            dispatch(getPopularVideos());
        } else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }
    console.log(videos[0])
    return (
        <div className="recommended">
            <CategoryBar />
            <InfiniteScroll dataLength={videos.length} next={fetchData} hasMore={true} loader={<div></div>}>
                <div className="recommended__videos">
                    {videos.map((video) => {
                        return <Video video={video} key={video.id} />
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Recommended;
