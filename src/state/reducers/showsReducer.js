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
            console.log(action.payload)

            const favList = state.favorites;
            const favIndex = state.favorites.indexOf(action.payload);
            console.log(favIndex);

            if (favIndex === -1) {
                favList.push(action.payload)
            }
            else {
                favList.splice(favIndex, 1)
            }

            console.log(favList);

            return { ...state, favorites: favList }
        default:
            return state;
    }
}

export default showsReducer;