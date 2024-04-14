import { configureStore } from "@reduxjs/toolkit";

import { skillsDataSlice } from "./skillsDataSlice";
import { projectsDataSlice } from "./projectsDataSlice";
import { feedbacksDataSlice } from "./feedbacksDataSlice";
import { filtersSlice } from "./filtersSlice";

const store = configureStore({
    reducer: {
        skillsData: skillsDataSlice.reducer,
        projectsData: projectsDataSlice.reducer,
        feedbacksData: feedbacksDataSlice.reducer,
        filters: filtersSlice.reducer
    }
})

export default store;