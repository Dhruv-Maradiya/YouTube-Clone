import moment from 'moment';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import request from '../api';
import "../css/Video/video.css";

const Video = ({ video }) => {
    const [channelIcon, setChannelIcon] = useState(null);
    const { snippet: { thumbnails: { medium: { url } }, description, channelTitle, publishedAt, channelId }, contentDetails: { duration }, statistics: { viewCount } } = video;
    useEffect(() => {
        const getChannelIcon = async () => {
            const { data: { items } } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default.url);
        }
        getChannelIcon();
    }, [channelId])
    return (
        <div className="video">
            <div className="video__top">
                <img src={url} alt="" />
                <span>{moment.utc(moment.duration(duration).asSeconds() * 1000).format("mm:ss")}</span>
            </div>
            <div className="video__title">
                <img src={channelIcon} alt="" />
                <p>{description}</p>
            </div>
            <div className="video__channel">
                <p>{channelTitle}</p>
            </div>
            <div className="video__details">
                <p>{numeral(viewCount).format("0.a")} views • {moment(publishedAt).fromNow()}</p>
            </div>
        </div>
    )
}

export default Video;
