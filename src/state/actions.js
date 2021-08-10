export const testAction = () => {
    return (dispatch) => {
        dispatch({
            type: "test",
            payload: 1
        })
    }
}