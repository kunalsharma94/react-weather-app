const initialState = {
    city: '',
    weather: {}
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SEARCH_CITY':
            return {
                ...state,
                city: action.city
            }

        case 'SAVE_DATA':
            return {
                ...state,
                weather: action.data
            }

        default:
            return state;

    }

}

export default reducer;