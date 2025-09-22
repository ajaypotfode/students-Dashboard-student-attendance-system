import axios from "axios";
// import token from "./tokenService";
import type { ActiveClassResponse, AttendanceSummaryParamsType, ClassResponseType, GetAttendenceSummaryResponse, QrResponseType } from "@/types/ClassTypes";

export const getClassesAPI = async (): Promise<ClassResponseType> => {
    try {
        const response = await axios.get<ClassResponseType>(
            `${import.meta.env.VITE_BASE_URL}/student/get-classes`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': "application/json",
                    // 'Authorization': `Bearer ${token}`
                }
            }
        )

        return response.data
    } catch (error) {
        console.log(error);
        throw error

    }
}



export const getActiveClassesAPI = async (): Promise<ActiveClassResponse> => {
    try {
        const response = await axios.get<ActiveClassResponse>(
            `${import.meta.env.VITE_BASE_URL}/student/active-classes`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': "application/json",
                    // 'Authorization': `Bearer ${token}`
                }
            }
        )

        return response.data
    } catch (error) {
        console.log(error);
        throw error

    }
}




export const generateClassQrAPI = async (classId: string): Promise<QrResponseType> => {

    const data = JSON.stringify({ classId })

    try {
        const response = await axios.post<QrResponseType>(
            `${import.meta.env.VITE_BASE_URL}/qr/generate-qr`,
            data,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': "application/json",
                    // 'Authorization': `Bearer ${token}`
                }
            }
        )

        return response.data
    } catch (error) {
        console.log(error);
        throw error

    }
}



export const getClassAttendenceSummaryAPI = async ({ classId, pageNum }: AttendanceSummaryParamsType): Promise<GetAttendenceSummaryResponse> => {
    const params: AttendanceSummaryParamsType = {};
    // console.log('classId Is :', classId);

    if (classId?.trim()) params.classId = classId;
    if (pageNum) params.pageNum = pageNum;

    try {
        const response = await axios.get<GetAttendenceSummaryResponse>(
            `${import.meta.env.VITE_BASE_URL}/student/attendence-summary`,
            {
                withCredentials: true,
                headers: {
                    'Content-Type': "application/json",
                    // 'Authorization': `Bearer ${token}`
                },
                params
            }
        )

        return response.data
    } catch (error) {
        console.log(error);
        throw error

    }
}