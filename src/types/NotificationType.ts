export interface NotificationType {
    heading: string;
    details: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface NotificationResponse {
    error?: unknown;
    message: string;
    success: boolean
    result?: NotificationType[]

}

export interface InitialStateType {
    notifications: NotificationType[]
}

export interface NotificationCardProps {
    notifications: NotificationType[];
    loading: { [key: string]: boolean }

}