import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { userData: null }, 
    // initialState: { userData: {} }, 
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        updateProfile: (state, action) => {
            return {
                ...state,
                followers: action.payload.followers,
                following: action.payload.following
            };
        },
    },
});

export const { setUserData, updateProfile } = userSlice.actions;
export default userSlice.reducer;