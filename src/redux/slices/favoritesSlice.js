import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: []
    },
    reducers: {
        addFavorite: (state, action) => {
            const movie = action.payload;
            if (!state.items.find(m => m.id === movie.id)) {
                state.items.push(movie);
            }
        },
        removeFavorite: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(m => m.id !== id);
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
