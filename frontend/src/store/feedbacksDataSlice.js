import { createSlice } from '@reduxjs/toolkit';

export const feedbacksDataSlice = createSlice({
    name: "feedbacksData",
    initialState: {},
    reducers: {
        setFeedbacksData: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

//export specific action(s)
export const { setFeedbacksData } = feedbacksDataSlice.actions;