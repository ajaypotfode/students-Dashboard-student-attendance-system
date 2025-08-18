// import UseAuth from "@/hooks/useAuthData"
import { useAppSelector } from "@/redux/reduxHook"
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"


const ProtectedRoutes = () => {
    const { isUserLogin, user } = useAppSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (isUserLogin === false) {
            navigate('/login')
        }
    }, [isUserLogin, navigate])

    if (isUserLogin === undefined) {
        return <div className="text-white text-center mt-20">Loading...</div>;
    }

    if (!isUserLogin) {
        return null;
    }


    if (user?.status !== 'active') {
        return <div className="text-red-500 text-center mt-10">Access Denied</div>;
    }

    return <Outlet />
}

export default ProtectedRoutes