// import React from 'react'
import { Sun } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const DateCard = ({ date, time }: { date: string, time: string }) => {
    // const date = new Date()
    // const time = date.toLocaleTimeString("en-US", { hour12: true })
    // const day = date.getDate()
    // const month = date.toLocaleString("default", { month: "long" })
    // const year = date.getFullYear()

    // const ordinalSuffix = (n: number) => {
    //     if (n > 3 && n < 21) return "th"
    //     switch (n % 10) {
    //         case 1: return "st"
    //         case 2: return "nd"
    //         case 3: return "rd"
    //         default: return "th"
    //     }
    // }

    return (
        <Card className="lg:px-6 bg-gray-900 border-none shadow-none lg:h-full lg:w-fit w-full  text-white">
            <CardContent className="flex lg:flex-col justify-between items-center  gap-2 sm:pt-4  h-[80%]">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Sun className="w-20 h-20" />
                    {/* <i className="bi bi-brightness-high smallsc1:text-5xl xl:text-4xl md:text-3xl text-2xl"></i> */}
                    <div className="flex flex-col leading-tight">
                        <span className="md:text-lg sm:text-sm text-xs font-medium">{time}</span>
                        <span className="md:text-md sm:text-xs text-[10px] ">Realtime Insight</span>
                    </div>
                </div>
                <div className=" font-bold md:text-2xl  sm:text-lg text-md">
                    <p>Today:</p>
                    <p className="">
                        {date}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

export default DateCard




//  <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild isActive={item.isActive}>
//                       <a href={item.url}>{item.title}</a>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>