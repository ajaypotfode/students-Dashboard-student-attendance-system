import { PaginationComponent } from '@/components/Pagination';
import { SelectInput } from '@/components/SelectInput';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import UseClassData from '@/hooks/useClassData';
import UseCommonData from '@/hooks/useCommonData';


const AttendenceSummary = () => {
    const { attendenceSummary, fetchAttendenceSummary, fetchClasses, allClasses } = UseClassData();
    const { pages } = UseCommonData()

    return (
        <div className="w-full h-full">
            <h1 className="smallsc1:text-4xl text-2xl text-white font-bold ml-6 mt-4">Attendence Summary </h1>
            <div className="flex justify-center space-x-6 gap-6 sm:p-5 p-3 smallsc1:py-8 py-4 h-[94%] w-full ">
                <Card className="w-full pt-0 bg-gray-900 border border-gray-500 text-white mx-auto rounded-xl relative overflow-hidden">
                    <CardContent className="smallsc1:p-6 p-4 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex gap-x-4 lg:w-[30%] w-[50%]">
                                <SelectInput classData={allClasses} getClassId={fetchAttendenceSummary} fetchClassData={fetchClasses} />
                                {/* <SelectClass getClassId={fetchAttendenceSummary} fetchData={fetchClasses} classData={allClasses} /> */}
                            </div>
                            <div className=''>
                                <p className='font-bold whitespace-nowrap smallsc1:text-xl xl:text-lg text-xs'>{attendenceSummary?.sessions?.classId.className || ""}</p>
                                <p className='text-gray-500 whitespace-nowrap text-[12px] '>
                                    {attendenceSummary?.sessions?.classId.time || ""}
                                </p>

                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto scrollbar-hidden">
                            <Table className="smallsc1:text-lg xl:text-md text-sm w-full">
                                <TableHeader className="sticky top-0 bg-gray-900 z-10">
                                    <TableRow>
                                        <TableHead className="text-white font-bold">Session No</TableHead>
                                        <TableHead className=" text-white font-bold">Date</TableHead>
                                        <TableHead className="text-white font-bold">Time</TableHead>
                                        <TableHead className="text-white font-bold text-center">Attended</TableHead>
                                        <TableHead className=" text-white font-bold text-center">Absent</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className=''>
                                    {attendenceSummary
                                        && attendenceSummary.sessions?.summary.map((attendence, index) => (
                                            <TableRow key={index} className="">
                                                <TableCell className="font-medium">Session-{index + 1}</TableCell>
                                                <TableCell>{attendence.date}</TableCell>
                                                <TableCell>{attendence.time}</TableCell>
                                                <TableCell className='text-center'>{attendence.present ? 'yes' : 'no'}</TableCell>
                                                <TableCell className="text-center">{!attendence.present ? 'yes' : 'no'}</TableCell>
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>

                    <CardFooter className="relative w-full">
                        <div className='absolute bottom-0 left-5 text-lg font-extrabold text-gray-500 '>
                            Total Class :<span className='text-white ml-3'>{attendenceSummary?.totalClass?.totalClass}</span> (
                            <span className='text-green-600'>{attendenceSummary?.totalClass?.attendence}</span> /
                            <span className='text-red-700'>{attendenceSummary?.totalClass?.absence}</span>
                            )
                        </div>
                        <div className='absolute bottom-0 right-0  '>
                            <PaginationComponent pageNum={pages.pageNum || 0} totalPage={pages.totalPages || 0} />
                            {/* <PaginationComponent pageNum={attendenceSummary?.pageNum || 0} totalPage={attendenceSummary?.totalPages || 0} /> */}
                        </div>

                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default AttendenceSummary