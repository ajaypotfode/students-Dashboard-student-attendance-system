import { configureStore } from "@reduxjs/toolkit";
import commonReducer from './slice/commonSlice';
import authReducer from './slice/authSlice';
import classDataReducer from './slice/classSlice'

const store = configureStore({
    reducer: {
        common: commonReducer,
        auth: authReducer,
        classData: classDataReducer

    },
    // middleware: (defaultMiddlware) => {
    //     defaultMiddlware().concat()
    // }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



export default store