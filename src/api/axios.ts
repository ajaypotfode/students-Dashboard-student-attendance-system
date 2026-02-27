import axios, { AxiosError } from "axios";

declare module 'axios' {
    export interface AxiosRequestConfig {
        cacheKey?: string;
    }
}

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

const cacheData = new Map<string, any>();

const authApiEndPoints = ['/auth']

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('studentToken')
        const requestedUrl = new URL(config.url!, config.baseURL).pathname;

        const isAuthApi = authApiEndPoints.some((path) => requestedUrl.startsWith(path));

        if (!isAuthApi && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }

        const iscaching = config.method === 'get' && config.cacheKey

        if (iscaching) {
            const key = config.cacheKey
            if (key && cacheData.has(key)) {
                config.adapter = async () => {
                    return {
                        data: cacheData.get(key),
                        status: 200,
                        statusText: 'OK',
                        headers: config.headers,
                        config
                    }
                }
            }
        }

        return config
    },
    (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => {
        const config = response.config

        if (config.method === 'get' && config.cacheKey) {
            const key = config.cacheKey
            cacheData.set(key, response.data)
        }

        // if (config.cacheKey && (config.method === 'post' || config.method === 'update' || config.method === 'delete')) {
        //     for (const key of cacheData.keys()) {
        //         if (key.startsWith(config.cacheKey)) {
        //             cacheData.delete(key)
        //         }
        //     }
        // }

        return response
    },
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