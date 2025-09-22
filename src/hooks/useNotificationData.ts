import { useAppDispatch, useAppSelector } from '@/redux/reduxHook'
import { getNotification } from '@/redux/slice/notificationSlice';
// import React from 'rea/ct'

const UseNotificationData = () => {
    const dispatch = useAppDispatch();
    const { notifications } = useAppSelector(state => state.notification);
      const { loading } = useAppSelector(state => state.common)

    const fethNotification = () => {
        dispatch(getNotification())
    }



    return {
        notifications,
        fethNotification,
        loading
    }
}

export default UseNotificationData