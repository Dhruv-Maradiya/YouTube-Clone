import React from 'react';
import "../css/comments/comments.css";
import SortIcon from '@material-ui/icons/Sort';
import { Avatar } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCommentsById } from '../redux/actions/comments.action';
import Comment from './Comment';

const Comments = ({ id }) => {
    const dispatch = useDispatch();
    const { comments, loading } = useSelector(state => state.commentReducer);
    const { url } = useSelector(state => state.auth.user ? state.auth.user : "");
    const submitComment = () => { }
    useEffect(() => {
        dispatch(getCommentsById(id));
    }, [dispatch, id]);
    return comments ? (
        <div className="comments">
            <div className="commenta__sort">
                <h4 className="comments__count">{!loading ? comments.length : null} Comments</h4>
                <SortIcon className="comment__sorticon" /> Sort By
            </div>
            <div className="comment__input">
                <Avatar src={url} className="comment__avatar" />
                <form onSubmit={submitComment}>
                    <TextField id="standard-basic" label="Add public comment" />
                </form>
            </div>
            <div className="comment__allComments">
                {!loading ? comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />
                }) : null}
            </div>
        </div>
    ) : null
}

export default Comments;
