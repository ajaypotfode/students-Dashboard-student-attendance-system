
import type { ClassResult } from '@/types/ClassTypes'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const AttendenceDetailsCard = ({ classData }: { classData: ClassResult | null }) => {
    return (
        <Card className="bg-transparent text-white xl:w-[80%] w-full">
            {
                classData && <CardHeader>
                    <CardTitle className="xl:text-4xl text-2xl font-bold">{classData?.classId.className}</CardTitle>
                    <p className="sm:text-lg text-sm text-gray-400">{classData?.classId.trainer.userName} • {classData?.classId.time}</p>
                </CardHeader>
            }
            <CardContent className="space-y-4 xl:text-2xl sm:text-xl text-lg ">
                <div className="flex justify-between  px-5  py-2 rounded-xl bg-gray-800 border border-gray-600  ">
                    <span className="text-gray-300">Total Sessions :-</span>
                    <span className="font-medium">{classData?.totalClass}</span>
                </div>
                <div className="flex justify-between px-5 py-2 rounded-xl bg-gray-800 border border-gray-600">
                    <span className="text-gray-300">Attended :-</span>
                    <span className="font-medium">{classData?.attendence}</span>
                </div>
                <div className="flex justify-between px-5 py-2 rounded-xl bg-gray-800 border border-gray-600">
                    <span className="text-gray-300">Attendance % :-</span>
                    {/* <span className={`font-bold ${>= 75 ? "text-green-400" : "text-yellow-400"}`}> */}
                    {classData && <span className={`font-bold`}>
                        {(classData?.attendence / classData?.totalClass) * 100} %
                    </span>}
                </div>
            </CardContent>
        </Card>
    )
}

export default AttendenceDetailsCard