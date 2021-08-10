import actionTypes from "../actionTypes";

const initialState = {
    showList: [{image: {}}]
}

const showsReducer = (state, action) => {
    switch(action.type){
        case actionTypes.SHOW_LIST:
            return {...state, showList: action.payload}
        case actionTypes.SHOW_SEARCH:
            return {...state, showList: action.payload}
        default:
            return initialState;
    }
}

export default showsReducer;