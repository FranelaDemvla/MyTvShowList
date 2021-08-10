import actionTypes from "./actionTypes"

export const getShowList = () => {
    return async (dispatch) => {
        fetch("http://api.tvmaze.com/shows")
        .then(res => res.json())
        .then(data => dispatch({
            type: actionTypes.SHOW_FAVS,
            payload: data
        }))
        .catch(error => console.error(error));
    }
}