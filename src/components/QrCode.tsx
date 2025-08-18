import QRCode from 'react-qr-code'


const AttendenceQr = ({data}:{data:string}) => {
    return (
        <div className='h-fit shadow-2xl'>
            <QRCode
                value={`${data}`}
                size={300}
                bgColor="#00000"
                fgColor="#ffffff"
                level="H"
                style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
        </div>
    )
}

export default AttendenceQr