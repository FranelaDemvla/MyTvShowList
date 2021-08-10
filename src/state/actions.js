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