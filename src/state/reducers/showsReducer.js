import actionTypes from "../actionTypes";

const initialState = {
    showList: []
}

const showsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SHOW_LIST:
            return {...state, showList: action.payload}
        case actionTypes.SHOW_SEARCH:
            return {...state, showList: action.payload}
        default:
            return state;
    }
}

export default showsReducer;