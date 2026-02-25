import type { UserType } from "@/types/AuthTypes";

export const getAuthDataService = () => {
    const token: string | null = localStorage.getItem('studentToken');
    const status: string | null = localStorage.getItem('studentStatus');
    const userJson = localStorage.getItem('studentData');
    const user: UserType | null = userJson ? JSON.parse(userJson) : null;

    return { token, user, status }
};

export const removeAuthDataService = () => {
    localStorage.removeItem('studentToken');
    localStorage.removeItem("studentData");
};