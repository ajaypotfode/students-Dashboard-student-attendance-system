// import React from 'react'
import { Card, CardContent } from './ui/card'

const NotificationCard = () => {
    return (
        <Card className="flex-1 bg-gray-900 border-none shadow-none relative h-full text-white overflow-y-auto ">
            <CardContent className="sm:pt-4 pb-10">
                <h2 className="sm:text-lg text-md font-semibold mb-4 ">
                    Notifications & Remainders
                </h2>

                <ol className="list-decimal sm:ml-4 ml-2">
                    <li className="mb-3">
                        <p className="font-semibold sm:text-md text-sm ">Tomorrow Holiday</p>
                        <div className="rounded-md mt-1 sm:text-sm text-xs text-gray-300 sm:px-5 px-3 py-2  bg-gray-800 border border-gray-600">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uun turma
                        </div>
                    </li>
                  <li className="mb-3">
                        <p className="font-semibold sm:text-md text-sm ">Tomorrow Holiday</p>
                        <div className="rounded-md mt-1 sm:text-sm text-xs text-gray-300 sm:px-5 px-3 py-2  bg-gray-800 border border-gray-600">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uun turma
                        </div>
                    </li>
                  <li className="mb-3">
                        <p className="font-semibold sm:text-md text-sm ">Tomorrow Holiday</p>
                        <div className="rounded-md mt-1 sm:text-sm text-xs text-gray-300 sm:px-5 px-3 py-2  bg-gray-800 border border-gray-600">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uun turma
                        </div>
                    </li>
                  <li className="mb-3">
                        <p className="font-semibold sm:text-md text-sm ">Tomorrow Holiday</p>
                        <div className="rounded-md mt-1 sm:text-sm text-xs text-gray-300 sm:px-5 px-3 py-2  bg-gray-800 border border-gray-600">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq uun turma
                        </div>
                    </li>
                </ol>
            </CardContent>
        </Card>
    )
}

export default NotificationCard