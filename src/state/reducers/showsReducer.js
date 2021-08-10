const showsReducer = (state = {test: 0}, action) => {
    switch(action.type){
        case "test":
            return {...state, test: state.test + action.payload}
        default:
            return state;
    }
}

export default showsReducer;