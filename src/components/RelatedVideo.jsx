import moment from 'moment';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import request from '../api';
import "../css/RelatedVideo/RelatedVideo.css";

const RelatedVideo = ({ item }) => {
    const [views, setViews] = useState(0);
    const [duration, setDuration] = useState(0);
    const history = useHistory();
    useEffect(() => {
        const getChannelDetails = async (videoId) => {
            const { data: { items } } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: videoId,
                }
            })
            if (items[0] !== undefined) {
                setViews(items[0].statistics.viewCount);
                setDuration(items[0].contentDetails.duration);
            }
        }
        getChannelDetails(item.id.videoId);
    }, [item.id.videoId]);
    const playVideo = (videoId) => {
        history.push(`/watch/${videoId}`);
    }
    if (item !== undefined && item !== null && item.snippet !== undefined) {
        var { snippet: { publishedAt, title, channelTitle, thumbnails: { medium: { url } } } } = item;
    } else {
        return null;
    }
    return (
        <div className="relatedVideo" onClick={() => { playVideo(item.id.videoId) }}>
            <div className="relatedVideo__thumbnail">
                <img src={url} alt="" />
                <span>{moment.utc(moment.duration(duration).asSeconds() * 1000).format("mm:ss")}</span>
            </div>
            <div className="relatedVideo__info">
                <h4>{title}</h4>
                <h6>{channelTitle}</h6>
                <span>{numeral(views).format("0.a")} Views • {moment(publishedAt).fromNow()}</span>
            </div>
        </div>
    )
}

export default RelatedVideo;
