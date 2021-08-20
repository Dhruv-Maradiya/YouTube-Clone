import React from 'react';
import { useSelector } from 'react-redux';
import RelatedVideo from './RelatedVideo';

const Search = () => {
    const { videos, loadingSearch } = useSelector(state => state.searchVideo ? state.searchVideo : { null: null, null: null })
    const style = {
        display: "flex",
        flexDirection: "column",
        margin: "20px auto"
    }
    return (
        <div className="search" style={style}>
            {videos && !loadingSearch ? videos.map((item) => {
                return <RelatedVideo item={item} />
            }) : null}
        </div>
    )
}

export default Search;
