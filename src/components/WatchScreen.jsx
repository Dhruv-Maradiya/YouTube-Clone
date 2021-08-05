import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../css/WatchScreen/WatchScreen.css";
import Comments from './Comments';
import MetaData from './MetaData';
import RelatedVideo from './RelatedVideo';
import { getVideosById } from "../redux/actions/videos.actions"

const WatchScreen = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => {
        dispatch(getVideosById(id))
    }, [dispatch, id])
    const { video, loading } = useSelector(state => state.selectedVideo);
    return (
        <div className="watchScreen">
            <div className="watchScreen__player">
                <iframe title={video?.snippet?.title} src={`https://www.youtube.com/embed/${id}`} frameBorder="0" title="video" allowFullScreen width="100%" height="100%"></iframe>
                {!loading && video ? <MetaData video={video} id={id} /> : null}
                <hr />
                <Comments id={id} />
            </div>
            <div className="watchScreen_related">
                {[...Array(20)].map(() => {
                    return <RelatedVideo />
                })}
            </div>
        </div>
    )
}

export default WatchScreen;
