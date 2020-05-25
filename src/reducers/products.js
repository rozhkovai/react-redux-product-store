const initialState = {
    isReady: false,
    items: null,
    categoriesBy: 'all',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case 'SET_CATEGORIES':
            return {
                ...state,
                categoriesBy: action.payload,
            };
        case'SET_IS_READY':
            return{
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
};

