import React, { useState } from 'react'
import TvShow from './TvShow'
import { connect } from "react-redux";
import { setFavorites, saveFavorites } from '../state/actions';
import { Checkbox, Button } from '@material-ui/core';

function TvShowList(props) {
  const { showList, favorites, actionSaveFavorites } = props;

  const [showFavorites, setShowFavorites] = useState(false);

  const handleFavoritesOnly = () => {
    setShowFavorites(!showFavorites);
  }

  const handleSave = () => {
    actionSaveFavorites();
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
      {showFavorites && <Button color="primary" onClick={handleSave}>Save this list</Button>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.showsReducer.favorites
})

const mapDispatchtoProps = (dispatch) => ({
  actionSetFavorites: (id) => dispatch(setFavorites(id)),
  actionSaveFavorites: () => dispatch(saveFavorites())
})

export default connect(mapStateToProps, mapDispatchtoProps)(TvShowList);