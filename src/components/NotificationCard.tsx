// import React from 'react'
import type { NotificationCardProps } from '@/types/NotificationType'
import { Card, CardContent } from './ui/card'
import { format } from 'date-fns'
import {TwoBoxSkeleton} from './Spinner'

// interface NotificationCardProps {
// notifications: NotificationType[] ;

// }

const NotificationCard: React.FC<NotificationCardProps> = ({ notifications, loading }) => {
    return (
        <Card className="flex-1 bg-gray-900 border-none shadow-none relative h-full text-white overflow-y-auto scrollbar-hidden w-full ">
            <CardContent className="sm:pt-4 pb-10">
                <h2 className="sm:text-lg text-md font-semibold mb-4 ">
                    Notifications & Remainders
                </h2>

                <ol className="list-decimal sm:ml-4 ml-2">
                    {
                        loading['getNotification'] ? <TwoBoxSkeleton className='h-5' />
                            : (notifications.map((notification) => (
                                <li className="mb-3" key={notification._id} >
                                    <p className="font-semibold sm:text-md text-sm ">{`${notification.heading} (${format(notification.createdAt, 'dd-MM-yyyy')})`}</p>
                                    <div className="rounded-md mt-1 sm:text-sm text-xs text-gray-300 sm:px-5 px-3 py-2  bg-gray-800 border border-gray-600">
                                        {notification.details}
                                    </div>
                                </li>
                            ))
                            )
                    }
                </ol>
            </CardContent>
        </Card>
    )
}

export default NotificationCard