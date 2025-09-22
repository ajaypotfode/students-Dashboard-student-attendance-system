
import { getNotificationAPI } from '@/service/notificationApiService'
import type { InitialStateType, NotificationResponse } from '@/types/NotificationType'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'

export const getNotification = createAsyncThunk<NotificationResponse, void, { rejectValue: string }>('getNotification', async (_, { rejectWithValue }) => {
    try {
        const response = await getNotificationAPI()
        return response
    } catch (error) {
        const err = error as AxiosError<{ message: string }>
        return rejectWithValue(err.response?.data?.message || "Failed To Fetch Notification!!")
    }
})





const initialState: InitialStateType = {
    notifications: []
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNotification.fulfilled, (state, action) => {
                state.notifications = action.payload.result || []
            })

    }
});
// export const { setClassId } = notificationSlice.actions;
export default notificationSlice.reducer