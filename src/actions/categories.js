export const setCategories = categories => ({
    type: 'SET_CATEGORIES',
    payload: categories
});

export const setSearchQuery = value => ({
    type: 'SET_QUERY',
    payload: value
});