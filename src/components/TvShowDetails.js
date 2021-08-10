import React from 'react'

export default function TvShowDetails(props) {
    const {showInfo} = props;

    return (
        <div className="details-container">
            <img src={showInfo.image && showInfo.image.medium}/>
            <h1>{showInfo.name}</h1>
            <div dangerouslySetInnerHTML={{__html: showInfo.summary}}/>
        </div>
    )
}
