import { createSlice } from '@reduxjs/toolkit';

export const skillsDataSlice = createSlice({
    name: "skillsData",
    initialState: {},
    reducers: {
        setSkillsData: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

//export specific action(s)
export const { setSkillsData } = skillsDataSlice.actions;