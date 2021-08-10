import React from 'react'
import TvShow from './TvShow'

export default function TvShowList(props) {
  const { showList } = props;

  return (
    <div>
      {
        showList.map(i => (
          <TvShow key={i.id} showInfo={i} isFavorite={true} />
        ))
      }
    </div>
  )
}
