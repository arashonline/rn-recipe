export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

// action creator for the toggle favorite action
export const toggleFavorite = (id)=>{
    return { type: TOGGLE_FAVORITE, mealId: id };
}


// action to handle filter
export const setFilters = filterSettings =>{
    return {
        type: SET_FILTERS,
        filters: filterSettings
    }
}
