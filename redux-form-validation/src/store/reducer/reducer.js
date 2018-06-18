const initialState = {
    authenticating: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTHENTICATING":
            return {
                ...state,
                authenticating: action.auth,
            };
   }

    return state;
};

export default reducer;