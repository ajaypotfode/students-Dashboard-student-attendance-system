// import UseAuth from "@/hooks/useAuthData"
import LoadingPage from "@/pages/loading/LoadingPage";
import UnauthorizedPage from "@/pages/unAuthorized/UnAuthorizedPage";
import { useAppSelector } from "@/redux/reduxHook"
// import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {
    const { isUserLogin, user, isUserLoading } = useAppSelector(state => state.auth)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (isUserLogin === false) {
    //         navigate('/login')
    //     }
    // }, [isUserLogin, navigate])



    if (isUserLoading) {
        return <LoadingPage />
    }

    if (isUserLogin === false) {
        return <Navigate to='/login' />
    }


    if (!user) {
        return <UnauthorizedPage text="You Are Not Authorized Persion" />
    }

    if (user?.status !== 'active') {
        return <UnauthorizedPage text="You Are Blocked By Organozation, Please Contact!!" />
    }

    return <Outlet />
}

export default ProtectedRoutes