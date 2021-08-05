import React, { useEffect } from 'react';
import "../css/MetaData/MetaData.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Avatar } from '@material-ui/core';
import ReactShowMoreText from 'react-show-more-text';
import numeral from 'numeral';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelDetails } from "../redux/actions/channel.action"

const MetaData = ({ video: { snippet, statistics }, id }) => {
    const dispatch = useDispatch();
    const { channelId, channelTitle, description, title, publishedAt } = snippet;
    const { viewCount, likeCount, dislikeCount } = statistics;
    const { channel } = useSelector(state => state.channelDetails);
    if (channel) {
        var { snippet: { thumbnails: { default: { url } } }, statistics: { subscriberCount } } = channel;
    }
    useEffect(() => {
        dispatch(getChannelDetails(channelId));
    }, [dispatch, channelId])
    return (
        <div className="metadata">
            <div className="metadata__info">
                <div className="metadata__desc">
                    <h3>{title}</h3>
                </div>
                <div className="metadata__buttons">
                    <div className="metadata__views">
                        {numeral(viewCount).format("0.a")} views • {moment(publishedAt).fromNow()}
                    </div>
                    <div className="metadata__allbuttons">
                        <ThumbUpIcon className="Button" />
                        <p className="likes">{numeral(likeCount).format("0.a")}</p>
                        <ThumbDownIcon className="Button" />
                        <p className="dislikes">{numeral(dislikeCount).format("0.a")}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="metadata__subscribe">
                <div className="metadata__userIcon">
                    <Avatar className="avatar" src={url} />
                    <div className="metadata__channelinfo">
                        <h4>{channelTitle}</h4>
                        <p>{numeral(subscriberCount).format("0.a")} subscribers</p>
                    </div>
                </div>
                <div className="metadata__subscribeButton">
                    <button>JOIN</button>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className="metadata__text">
                <ReactShowMoreText
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="metadata__alltext"
                    anchorClass="metadata__anchor"
                    expanded={false}
                >
                    {description}
                </ReactShowMoreText>
            </div>
        </div>
    )
}

export default MetaData;
