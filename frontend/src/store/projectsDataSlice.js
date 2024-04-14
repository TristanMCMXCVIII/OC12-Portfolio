import { createSlice } from '@reduxjs/toolkit';

export const projectsDataSlice = createSlice({
    name: "projectsData",
    initialState: {},
    reducers: {
        setProjectsData: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

//export specific action(s)
export const { setProjectsData } = projectsDataSlice.actions;