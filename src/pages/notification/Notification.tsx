import NotificationComponent from '@/components/NotificationComponent'
import { NotificationSkeleton } from '@/components/Spinner';
import UseNotificationData from '@/hooks/useNotificationData'
import { useEffect } from 'react';
// import React from 'react'

const Notification = () => {
    const { fethNotification, notifications, loading } = UseNotificationData();

    useEffect(() => {
        fethNotification()
    }, [])

    return (
        <div className="w-full h-full overflow-y-auto scrollbar-hidden ">
            <h1 className="smallsc1:text-4xl  text-2xl text-white font-bold ml-6 mt-4">Notification</h1>
            <div className="w-full md:p-11 pl-10 p-7  ">
                {loading['getNotification'] ? <NotificationSkeleton />
                    : (notifications.map((notification) => (
                        <NotificationComponent
                            key={notification._id}
                            details={notification.details}
                            heading={notification.heading}
                            date={notification.createdAt}
                        />
                    )))}
            </div>
        </div>
    )
}

export default Notification