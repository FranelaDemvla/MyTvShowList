import { Checkbox } from '@material-ui/core';
import React from 'react'

export default function TvShowDetails(props) {
    const {showInfo, isChecked, handleCheck} = props;

    return (
        <div className="details-container">
            <img src={showInfo.image && showInfo.image.original}/>
            <h1>{showInfo.name}</h1>
            <div dangerouslySetInnerHTML={{__html: showInfo.summary}}/>
            <div>
                <Checkbox checked={isChecked} onChange={handleCheck}/>
                <text>Add to favorites</text>
            </div>
            {showInfo.externals.imdb && <a href={`https://www.imdb.com/title/${showInfo.externals.imdb}`}>view IMDB</a>}
        </div>
    )
}
