import React from 'react'
import { Checkbox } from '@material-ui/core';

export default function TvShow(props) {
    const {name, isFavorite} = props;

    return (
        <div className="show-container">
            <h2>{name}</h2>
            <Checkbox value={isFavorite}/>
        </div>
    )
}
