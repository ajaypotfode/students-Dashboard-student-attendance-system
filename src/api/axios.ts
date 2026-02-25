import axios, { AxiosError } from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

const authApiEndPoints = ['/auth']

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('studentToken')
        const requestedUrl = new URL(config.url!, config.baseURL).pathname;

        const isAuthApi = authApiEndPoints.some((path) => requestedUrl.startsWith(path));

        if (!isAuthApi && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const requestedUrl = error.config?.url || '';

        const isAuthApi = authApiEndPoints.some((path) => requestedUrl.startsWith(path));

        if (error.response?.status === 401 && !isAuthApi) {
            localStorage.removeItem('studentToken');
            localStorage.removeItem('studentData');
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)



export default api