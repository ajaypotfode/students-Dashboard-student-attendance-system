
interface CommonResponse {
    success: boolean;
    message: string;
    error?: unknown;
}

// export interface ClassAttendanceParamstype {
//     classId?: string;
//     pageNum?: number
// }

export type TrainerType = {
    _id: string,
    userName: string
}

export type ClassIdType = {
    _id: string,
    className: string,
    trainer: TrainerType,
    time: string
}


export interface ClassResult {
    _id: string;
    studentId: string;
    classId: ClassIdType;
    totalClass: number;
    attendence: number;
    absence: number;
    __v: number
}


export type AttendanceSummaryParamsType = {
    pageNum?: number,
    classId?: string
}

export interface Student {
    _id: string;
    userName: string;
    email: string;
}

export interface Class {
    _id: string;
    className: string;
    time: string;
}

export interface SummaryEntry {
    date: string;    // Format: "YYYY-MM-DD"
    time: string;    // Format: "HH:mm AM/PM"
    present: boolean;
}

export interface Session {
    _id: string;
    studentId: Student;
    classId: Class;
    summary: SummaryEntry[];
    __v: number;
}

export interface TotalClassStats {
    totalClass: number;
    attendence: number;
    absence: number;
}

export interface GetAttendenceSummaryResponse extends CommonResponse {
    result?: {
        sessions: Session;
        totalClass: TotalClassStats;
    },
    pages?: {
        totalPages: number;
        pageNum: number;
    }
}


export interface ClassResponseType extends CommonResponse {
    result?: ClassResult[]
}

export interface QrResponseType extends CommonResponse {
    result?: ClassResult;
    qrtoken?: string

}

export type ActiveClassType = {
    _id: string,
    classId: ClassIdType
}

export interface ActiveClassResponse extends CommonResponse {
    result?: ActiveClassType[]
}



export interface InitialStateType {
    activeClasses: ActiveClassType[];
    attendenceSummary: {
        sessions: Session;
        totalClass: TotalClassStats;
    } | null;
    allClasses: ClassResult[];
    qrData: { qrToken: string, classData: ClassResult | null },
    currentClassId: string
}