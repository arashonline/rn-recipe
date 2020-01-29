export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

// action creator for the toggle favorite action
export const toggleFavorite = (id)=>{
    return { type: TOGGLE_FAVORITE, mealId: id };
}