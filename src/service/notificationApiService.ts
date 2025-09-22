import type { NotificationResponse } from "@/types/NotificationType";
import axios from "axios";
// import token from "./tokenService";

export const getNotificationAPI = async (): Promise<NotificationResponse> => {
    try {
        const response = await axios.get<NotificationResponse>(
            `${import.meta.env.VITE_BASE_URL}/notification/get`,
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