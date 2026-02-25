
import type { ClassResponseType } from "@/types/ClassTypes";
import api from "@/api/axios";

export const generateQrCode = async (): Promise<ClassResponseType> => {

    const response = await api.get<ClassResponseType>('/student/get-classes');
    return response.data
}

