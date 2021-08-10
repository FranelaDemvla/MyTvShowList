import actionTypes from "../actionTypes";

const initialState = {
    showList: [],
    favorites: []
}

const showsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_LIST:
            return { ...state, showList: action.payload };
        case actionTypes.SHOW_SEARCH:
            return { ...state, showList: action.payload };
        case actionTypes.GET_FAVS:
            const storedList = JSON.parse(localStorage.getItem('favoritesList')) || [];
            return {...state, favorites: storedList};
        case actionTypes.SET_FAV:
            const favList = state.favorites;
            const favIndex = state.favorites.indexOf(action.payload);

            if (favIndex === -1) {
                favList.push(action.payload)
            }
            else {
                favList.splice(favIndex, 1)
            }

            return { ...state, favorites: favList };
        case actionTypes.SAVE_FAV:
            localStorage.setItem('favoritesList', JSON.stringify(state.favorites))
            return state;
        default:
            return state;
    }
}

export default showsReducer;