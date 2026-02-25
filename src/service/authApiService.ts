import api from '@/api/axios';
import type { LoginData, LoginResponse, /*SignupResponse, UserData*/ } from '@/types/AuthTypes';

// this is written for my reference

// const api = axios.create({
//     baseURL: 'http://localhost:4000/v1',
//     withCredentials: true,
// });


// const response = await api.post('/add', data)
// const demo = await api.get('/get', { params })


// export const createUserAPI = async (userData: UserData): Promise<SignupResponse> => {

//     const data = JSON.stringify(userData);

//     try {
//         const response = await axios.post<SignupResponse>(
//             `${import.meta.env.VITE_BASE_URL}/auth/add`,
//             data,
//             {
//                 withCredentials: true,
//                 headers: {
//                     'Content-Type': "application/json"
//                 }
//             }
//         )

//         return response.data
//     } catch (error) {
//         console.log(error);
//         throw error

//     }
// }


export const loginUserAPI = async (loginData: LoginData): Promise<LoginResponse> => {

    const response = await api.post<LoginResponse>('/auth/login', loginData);
    const user = {
        userId: response.data.result?._id,
        role: response.data.result?.role,
        userName: response.data.result?.userName,
        status: response.data.result?.status,
        image: response.data.result?.image,
    }

    const token = response.data.token;

    localStorage.setItem('studentToken', token);
    localStorage.setItem('studentData', JSON.stringify(user));

    return response.data
}


// export const isUserLoginAPI = async (): Promise<IsLoginUserResponse> => {
//     try {
//         const response = await axios.get<IsLoginUserResponse>(
//             `${import.meta.env.VITE_BASE_URL}/auth/status`,
//             {
//                 withCredentials: true,
//                 headers: {
//                     'Content-Type': "application/json"
//                 }
//             },

//         )

//         return response.data
//     } catch (error) {
//         console.log(error);
//         throw error

//     }
// }


// export const logoutUserAPI = async (): Promise<CommonResponse> => {
//     try {
//         const response = await axios.post<CommonResponse>(
//             `${import.meta.env.VITE_BASE_URL}/auth/logout`,
//             {},
//             {
//                 withCredentials: true,
//                 headers: {
//                     'Content-Type': "application/json"
//                 }
//             }
//         )
//         return response.data

//     } catch (error) {
//         console.log(error);
//         throw error
//     }
// }


