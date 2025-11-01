import AttendenceDetailsCard from "@/components/AttendenceDetailsCard";
import AttendenceQr from "@/components/QrCode";
import { SelectInput } from "@/components/SelectInput";
import UseClassData from "@/hooks/useClassData";


const AddAttendence = () => {
  const { activeClasses, fetchActiveClasses, generateQr, qrData, loading } = UseClassData();


  return (
    <div className="w-full h-full overflow-y-auto scrollbar-hidden ">
      <h1 className="smallsc1:text-4xl text-2xl text-white font-bold ml-6 mt-4">Get Qr Code</h1>
      <div className=" sm:w-[50%] w-[70%] flex justify-start sm:space-x-6 space-x-3 items-center md:p-7 p-4 overflow-x-auto flex-nowrap scrollbar-hidden ">
        <SelectInput getClassId={generateQr} fetchClassData={fetchActiveClasses} classData={activeClasses} loading={loading} />
      </div>

      <div className="w-full md:p-11 lg:p-7 sm:p-5 p-3 flex lg:flex-row flex-col  flex-1  gap-4">
        <div className="  sm:p-7 p-4 rounded-2xl bg-gray-900 flex flex-1 justify-center">
          <AttendenceDetailsCard classData={qrData.classData} loading={loading} />
        </div>
        <div className="  p-7 rounded-2xl bg-gray-900 flex flex-1 justify-center flex-col items-center">


          {qrData.qrToken ? (
            <AttendenceQr data={qrData.qrToken} />
          ) : (
            <p className="text-gray-400">Select a class to generate QR</p>
          )}
        </div>
      </div>
    </div>

  )
}

export default AddAttendence