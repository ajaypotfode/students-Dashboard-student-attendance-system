import { useAppDispatch} from "@/redux/reduxHook"
import { loginUser, logoutUser } from "@/redux/slice/authSlice"
import { type LoginFormType } from '../schema/authFormShema'
// import { Route } from "react-router-dom"
// import type { UseFormReturn } from "react-hook-form"

const UseAuth = () => {

    const dispatch = useAppDispatch()

    const getUserLogin = async (data: LoginFormType, reset: () => void) => {
        const response = await dispatch(loginUser(data)).unwrap();

        if (response.success) {
            reset()
            window.location.href = '/'

            localStorage.setItem('token', JSON.stringify(response.token))
        }
    }

    const getUserLogout = async () => {
        dispatch(logoutUser())
    }

    return {
        getUserLogin,
        getUserLogout,
        // is
    }
}

export default UseAuth