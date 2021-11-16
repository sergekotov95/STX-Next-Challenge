const initialState = {
    searchTitle: 'castle'
};

const films = (state = initialState, action) => {
    switch (action.type) {
        case 'FILMS_FETCHED':
            return {
                ...state, 
                searchTitle: action.payload
            }
        default: return state
    }
}

export default films; 