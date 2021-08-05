import moment from 'moment';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import request from '../api';
import "../css/Video/video.css";

const Video = ({ video }) => {
    const history = useHistory()
    const [channelIcon, setChannelIcon] = useState(null);
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const { id, snippet: { thumbnails: { medium: { url } }, description, channelTitle, publishedAt, channelId } } = video;
    const videoId = id?.videoId || id;
    useEffect(() => {
        const getChannelIcon = async () => {
            try {
                const { data: { items } } = await request('/channels', {
                    params: {
                        part: 'snippet',
                        id: channelId,
                    }
                })
                setChannelIcon(items[0].snippet.thumbnails.default.url);
            } catch (error) {
                console.log(error.message);
                setChannelIcon("");
            }
        }
        getChannelIcon();
    }, [channelId]);
    useEffect(() => {
        const getChannelDetails = async () => {
            const { data: { items } } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: videoId,
                }
            })
            setViews(items[0].statistics.viewCount);
            setDuration(items[0].contentDetails.duration);
        }
        getChannelDetails();
    }, [videoId]);
    const handleClick = () => {
        history.push(`/watch/${videoId}`)
    }
    return (
        <div className="video" onClick={handleClick} >
            <div className="video__top">
                <img src={url} alt="" />
                <span>{moment.utc(moment.duration(duration).asSeconds() * 1000).format("mm:ss")}</span>
            </div>
            <div className="video__title">
                <img src={channelIcon} alt="" width="160px" height="90px" />
                <p>{description}</p>
            </div>
            <div className="video__channel">
                <p>{channelTitle}</p>
            </div>
            <div className="video__details">
                <p>{numeral(views).format("0.a")} views • {moment(publishedAt).fromNow()}</p>
            </div>
        </div>
    )
}

export default Video;
