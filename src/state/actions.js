import actionTypes from "./actionTypes"

export const getShowList = () => {
  return async (dispatch) => {
    await fetch("http://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => dispatch({
        type: actionTypes.SHOW_LIST,
        payload: data
      }))
      .catch(error => console.error(error));
  }
}

export const getFilteredShows = (query) => {
  return async (dispatch) => {
    await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(data => {
        const showData = data.map(i => i.show)
        dispatch({
          type: actionTypes.SHOW_SEARCH,
          payload: showData
        });
      })
      .catch(error => console.error(error));
  }
}

export const getFavorites = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.GET_FAVS
    })
  }
}

export const setFavorites = (id) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SET_FAV,
      payload: id
    })
  }
}