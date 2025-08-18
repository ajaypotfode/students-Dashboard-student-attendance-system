import NotificationComponent from '@/components/NotificationComponent'
// import React from 'react'

const Notification = () => {
    return (
        <div className="w-full h-full overflow-y-auto scrollbar-hidden ">
            <h1 className="smallsc1:text-4xl  text-2xl text-white font-bold ml-6 mt-4">Notification</h1>
            <div className="w-full md:p-11 pl-10 p-7  ">
                <NotificationComponent />
            </div>
        </div>
    )
}

export default Notification