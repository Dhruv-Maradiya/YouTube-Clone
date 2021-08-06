import React, { useEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../css/WatchScreen/WatchScreen.css";
import Comments from './Comments';
import MetaData from './MetaData';
import RelatedVideo from './RelatedVideo';
import { getVideosById } from "../redux/actions/videos.actions"
import { getRelatedVideo } from "../redux/actions/relatedVideo.action"

const WatchScreen = () => {
    const { width, ref } = useResizeDetector();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { videos, loadingRelated } = useSelector(state => state.relatedVideos);
    useEffect(() => {
        dispatch(getVideosById(id))
        dispatch(getRelatedVideo(id));
    }, [dispatch, id]);
    useEffect(() => {

    })
    const { video, loading } = useSelector(state => state.selectedVideo);
    if (width >= 900) {
        const watchScreenStyle = {
            flexDirection: "row",
        }
        return (
            <div className="watchScreen" ref={ref} style={watchScreenStyle} >
                <div className="watchScreen__player">
                    <iframe title={video?.snippet?.title} src={`https://www.youtube.com/embed/${id}`} frameBorder="0" title="video" allowFullScreen width="100%" height="100%"></iframe>
                    {!loading && video ? <MetaData video={video} id={id} /> : null}
                    <hr />
                    <Comments id={id} />
                </div>
                <div className="watchScreen_related">
                    {videos && !loadingRelated ? videos.map((item) => {
                        return <RelatedVideo item={item} />
                    }) : null}
                </div>
            </div>
        )
    } else {
        const watchScreenStyle = {
            flexDirection: "column",
            width: "100vw",
        }
        return (
            <div className="watchScreen" style={watchScreenStyle} ref={ref} >
                <div className="watchScreen__player">
                    <iframe title={video?.snippet?.title} src={`https://www.youtube.com/embed/${id}`} frameBorder="0" title="video" allowFullScreen width="100%" height="100%"></iframe>
                    {!loading && video ? <MetaData video={video} id={id} /> : null}
                    <hr />
                </div>
                <div className="watchScreen_related">
                    {videos && !loadingRelated ? videos.map((item) => {
                        return <RelatedVideo item={item} />
                    }) : null}
                </div>
                <Comments id={id} />
            </div>
        )
    }
}

export default WatchScreen;
