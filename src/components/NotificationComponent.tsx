// import React from 'react'
import { MessageSquareText } from "lucide-react"
import { Card, CardContent } from './ui/card'
import { format } from "date-fns"

interface NotificationComponentProps {
    date: string,
    details: string,
    heading: string
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({ date, details, heading }) => {
    return (
        <>
            <div className="relative pl-8 pt-4 pb-6 border-l-2 border-gray-300 ">
                <div className="absolute -left-6 -top-1 bg-gray-900 text-white rounded px-3 py-1 text-xs whitespace-nowrap">
                    {format(new Date(date), "MM/dd/yyyy hh:mm a")}
                </div>
                <div className="absolute -left-[16px] top-[48px] bg-white rounded-full border-2 border-gray-400 p-1">
                    <MessageSquareText className="w-4 h-4 text-gray-900" />
                </div>
                <Card className="sm:ml-2 ml-0 sm:p-4 p-3   mt-4 bg-gray-900">
                    <CardContent className=" sm:px-3 px-2">
                        <h4 className="text-white font-semibold text-sm mb-1">
                            {heading}
                        </h4>
                        <p className="text-sm text-gray-300">
                            {details}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default NotificationComponent