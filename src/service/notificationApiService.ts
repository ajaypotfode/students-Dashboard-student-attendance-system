import api from "@/api/axios";
import type { NotificationResponse } from "@/types/NotificationType";

export const getNotificationAPI = async (): Promise<NotificationResponse> => {

    const response = await api.get<NotificationResponse>('/notification/get');
    return response.data
}