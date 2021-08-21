import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import RelatedVideo from './RelatedVideo';
import { getVideosByKeyword } from '../redux/actions/search.action';
import InfiniteScroll from 'react-infinite-scroll-component';

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { keyWord } = useParams();
    const { videos, loadingSearch } = useSelector(state => state.searchVideo ? state.searchVideo : { null: null, null: null })
    const style = {
        display: "flex",
        flexDirection: "column",
        margin: "20px auto"
    }
    const fetchData = () => {
        dispatch(getVideosByKeyword(keyWord));
    }
    useEffect(() => {
        const searchVideos = () => {
            dispatch(getVideosByKeyword(keyWord));
            history.push(`/search/${keyWord}`);
        }
        searchVideos();
    }, [keyWord])
    return (
        <div className="search" style={style}>
            <InfiniteScroll dataLength={videos ? videos.length : 0} next={fetchData} hasMore={true} loader={<div></div>} >
                {videos ? videos.map((item) => {
                    return <RelatedVideo item={item} key={item.id.videoId} />
                }) : null}
            </InfiniteScroll>
        </div>
    )
}

export default Search;
