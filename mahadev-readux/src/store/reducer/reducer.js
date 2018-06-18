const initialState = {
    counter: 0,
    name: "Its a name given by redux , Mahadev"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DECREAMENT":
            return {
                ...state,
                counter: state.counter - 1
            };
        case "ADDFIVE":
            return {
                ...state,
                counter: state.counter + action.value
            };
        case "SUBFIVE":
            return {
                ...state,
                counter: state.counter - action.value
            }
         
        
    }

    return state;
};

export default reducer;