import type { ActiveClassResponse, AttendanceSummaryParamsType, ClassResponseType, GetAttendenceSummaryResponse, QrResponseType } from "@/types/ClassTypes";
import api from "@/api/axios";

export const getClassesAPI = async (): Promise<ClassResponseType> => {

    const response = await api.get<ClassResponseType>('/student/get-classes');
    return response.data
}



export const getActiveClassesAPI = async (): Promise<ActiveClassResponse> => {

    const response = await api.get<ActiveClassResponse>('/student/active-classes');
    return response.data
}




export const generateClassQrAPI = async (classId: string): Promise<QrResponseType> => {

    const data = { classId }

    const response = await api.post<QrResponseType>('/qr/generate-qr', data);
    return response.data
}



export const getClassAttendenceSummaryAPI = async ({ classId, pageNum }: AttendanceSummaryParamsType): Promise<GetAttendenceSummaryResponse> => {
    const params: AttendanceSummaryParamsType = {};
    // console.log('classId Is :', classId);

    if (classId?.trim()) params.classId = classId;
    if (pageNum) params.pageNum = pageNum;


    const response = await api.get<GetAttendenceSummaryResponse>('/student/attendence-summary', { params });
    return response.data
}