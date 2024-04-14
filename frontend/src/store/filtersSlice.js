import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        typePageProjects: 'Tous',
        typePageSkills: 'Tous'
    },
    reducers: {
        setFilterProjects: (state, action) => {
            return {...state, typePageProjects: action.payload};
        }
    }
})

//export specific action(s)
export const { setFilterProjects } = filtersSlice.actions;