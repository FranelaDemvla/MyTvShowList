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
            return state;
        case actionTypes.SET_FAV:
            const favList = state.favorites;
            const favId = state.favorites.findIndex(action.payload);

            if (favId < 0) {
                return state;
            }
            favList.splice(favId)
            return { ...state, favorites: favList }
        default:
            return state;
    }
}

export default showsReducer;