import { configureStore } from "@reduxjs/toolkit";
import commonReducer from './slice/commonSlice';
import authReducer from './slice/authSlice';
import classDataReducer from './slice/classSlice'
import notificationReducer from './slice/notificationSlice'

const store = configureStore({
    reducer: {
        common: commonReducer,
        auth: authReducer,
        classData: classDataReducer,
        notification: notificationReducer

    },
    // middleware: (defaultMiddlware) => {
    //     defaultMiddlware().concat()
    // }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



export default store