
import type { ClassResult } from '@/types/ClassTypes'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { TwoBoxSkeleton, Spinner } from './Spinner'

const AttendenceDetailsCard = ({ classData, loading }: { classData: ClassResult | null, loading: { [key: string]: boolean } }) => {
    return (
        <Card className="bg-transparent text-white xl:w-[80%] w-full">
            {
                loading['generateQr'] ? <TwoBoxSkeleton className='h-4' /> :
                    (classData && <CardHeader>
                        <CardTitle className="xl:text-4xl text-2xl font-bold">{classData?.classId.className}</CardTitle>
                        <p className="sm:text-lg text-sm text-gray-400">{classData?.classId.trainer.userName} • {classData?.classId.time}</p>
                    </CardHeader>)
            }
            <CardContent className="space-y-4 xl:text-2xl sm:text-xl text-lg ">
                <div className="flex justify-between  px-5  py-2 rounded-xl bg-gray-800 border border-gray-600  ">
                    <span className="text-gray-300 whitespace-nowrap ">Total Sessions :-</span>
                    {loading['generateQr'] ? <Spinner className='w-4 h-4' />
                        : <span className="font-medium">{classData?.totalClass}</span>}
                </div>
                <div className="flex justify-between px-5 py-2 rounded-xl bg-gray-800 border border-gray-600">
                    <span className="text-gray-300 whitespace-nowrap">Attended :-</span>
                    {loading['generateQr'] ? <Spinner className='w-4 h-4' />
                        : <span className="font-medium">{classData?.attendence}</span>
                    }
                </div>
                <div className="flex justify-between px-5 py-2 rounded-xl bg-gray-800 border border-gray-600">
                    <span className="text-gray-300 whitespace-nowrap">Attendance % :-</span>
                    {/* <span className={`font-bold ${>= 75 ? "text-green-400" : "text-yellow-400"}`}> */}
                    {loading['generateQr'] ? <Spinner className='w-4 h-4' />
                        : (classData && <span className={`font-bold`}>
                            {Math.floor((classData?.attendence / classData?.totalClass) * 100)} %
                        </span>)}
                </div>
            </CardContent>
        </Card>
    )
}

export default AttendenceDetailsCard