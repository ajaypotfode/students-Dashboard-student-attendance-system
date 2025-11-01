import { useAppDispatch, useAppSelector } from "@/redux/reduxHook"
import { loginUser, logoutUser } from "@/redux/slice/authSlice"
import { type LoginFormType } from '../schema/authFormShema'
import { toast } from "react-toastify"
// import { Route } from "react-router-dom"
// import type { UseFormReturn } from "react-hook-form"

const UseAuth = () => {
    const { user } = useAppSelector(state => state.auth)
    const { loading } = useAppSelector(state => state.common)
    const dispatch = useAppDispatch()

    const getUserLogin = async (data: LoginFormType, reset: () => void) => {
        const response = await dispatch(loginUser(data)).unwrap();

        if (response.success) {
            reset()
            window.location.href = '/'
            toast.success('User Logged in SuccessFully!!')

            // localStorage.setItem('token', JSON.stringify(response.token))
        }
    }

    const getUserLogout = async () => {
        const response = await dispatch(logoutUser()).unwrap();

        if (response.success) {
            window.location.href = '/login'
        }
    }

    return {
        getUserLogin,
        getUserLogout,
        user,
        loading
        // is
    }
}

export default UseAuth