import React from 'react'
import { Checkbox } from '@material-ui/core';

export default function TvShow(props) {
    const {showInfo, isFavorite} = props;

    return (
        <div className="show-container">
            <img src={showInfo.image.medium}/>
            <h2>{showInfo.name}</h2>
            <Checkbox value={isFavorite}/>
        </div>
    )
}
