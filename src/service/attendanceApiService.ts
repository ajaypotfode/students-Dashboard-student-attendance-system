import axios from "axios";
// import token from "./tokenService";
import type { ClassResponseType } from "@/types/ClassTypes";

export const generateQrCode = async (): Promise<ClassResponseType> => {
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

