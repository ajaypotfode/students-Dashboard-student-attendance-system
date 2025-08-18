import { useEffect, } from "react"
import DateCard from "@/components/DateCard"
import NotificationCard from "@/components/NotificationCard"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import UseCommonData from "@/hooks/useCommonData"
import UseClassData from "@/hooks/useClassData"

const Dashboard = () => {
    const { todaysDateData, todaysDate } = UseCommonData()
    const { allClasses, fetchClasses } = UseClassData()


    useEffect(() => {
        todaysDateData();
        fetchClasses()
    }, [])
    return (
        <div className="w-full h-full overflow-y-auto scrollbar-hidden ">
            <h1 className="smallsc1:text-4xl lg:text-2xl text-xl text-white font-bold ml-6 mt-4">Dashboard</h1>
            <div className="lg:h-[360px] flex lg:flex-row flex-col justify-center lg:space-x-6 lg:space-y-0 space-y-6 items-center xs:p-7 p-4 ">
                <DateCard date={todaysDate.date} time={todaysDate.time} />
                <NotificationCard />
            </div>

            <div className="w-full md:p-7 p-4 ">
                <div className="md:p-7 p-5 rounded-2xl bg-gray-900">

                    <Table className='w-full flex-1 text-white scrollbar-hidden  '>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader className='w-full'>
                            <TableRow className="text-white lg:text-xl md:text-lg text-sm">
                                <TableHead className=" text-white font-bold">Course Name</TableHead>
                                <TableHead className="text-white font-bold">Time</TableHead>
                                <TableHead className="text-white font-bold">Teacher</TableHead>
                                <TableHead className=" text-white font-bold text-center">Total Classes</TableHead>
                                <TableHead className="text-white font-bold text-center">Attendence</TableHead>
                                <TableHead className="text-white font-bold text-center">Absence</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {allClasses && allClasses.map((classData, index) => (
                                <TableRow key={index} className="lg:text-xl md:text-lg text-sm">
                                    <TableCell className="font-medium">{classData.classId.className}</TableCell>
                                    <TableCell>{classData.classId.time}</TableCell>
                                    <TableCell>{classData.classId.trainer.userName}</TableCell>
                                    <TableCell className="text-center">{classData.totalClass}</TableCell>
                                    <TableCell className="text-center">{classData.attendence}</TableCell>
                                    <TableCell className="text-center">{classData.absence}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>

    )
}

export default Dashboard