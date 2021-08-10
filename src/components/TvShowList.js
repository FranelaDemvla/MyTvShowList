import React, { useState } from 'react'
import TvShow from './TvShow'
import { connect } from "react-redux";
import { getFavorites, setFavorites } from '../state/actions';
import { Checkbox } from '@material-ui/core';

function TvShowList(props) {
  const [showFavorites, setShowFavorites] = useState(false);

  const { showList, favorites } = props;

  const handleFavoritesOnly = () => {
    setShowFavorites(!showFavorites);
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Checkbox checked={showFavorites} onChange={handleFavoritesOnly} /> <p>Show favorites only</p>
      </div>
      {
        showList.map(i => {
          const favIndex = favorites.indexOf(i.id);

          if(!showFavorites || (showFavorites && favIndex !== -1)) {
            return (<TvShow key={i.id} showInfo={i} isFavorite={favIndex !== -1} />)
          }
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.showsReducer.favorites
})

const mapDispatchtoProps = (dispatch) => ({
  actionGetFavorites: () => dispatch(getFavorites()),
  actionSetFavorites: (id) => dispatch(setFavorites(id))
})

export default connect(mapStateToProps, mapDispatchtoProps)(TvShowList);