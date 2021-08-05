import React, { useEffect } from 'react';
import { ThumbDownAlt, ThumbUpAlt } from '@material-ui/icons';
import moment from 'moment';
import { Avatar } from '@material-ui/core';

const Comment = ({ comment }) => {
    useEffect(() => {
        document.getElementById(comment.id).innerHTML = comment.snippet.topLevelComment.snippet.textDisplay;
    }, [comment])
    const { authorProfileImageUrl, authorDisplayName, publishedAt, textDisplay, likeCount } = comment.snippet.topLevelComment.snippet;
    return (
        <div className="comment__comment">
            <Avatar src={authorProfileImageUrl} />
            <div className="comment__commentInfo">
                <h5>{authorDisplayName} <span>{moment(publishedAt).fromNow()}</span></h5>
                <p id={comment.id}></p>
                <div className="comments__buttons">
                    <ThumbUpAlt className="button" />
                    <span>{likeCount}</span>
                    <ThumbDownAlt className="button" />
                </div>
            </div>
        </div>
    )
}

export default Comment;
