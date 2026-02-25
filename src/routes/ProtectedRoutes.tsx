import UnauthorizedPage from "@/pages/unAuthorized/UnAuthorizedPage";
import { getAuthDataService } from "@/service/localStorageService";
// import { useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {
    // const { isUserLogin, user, isUserLoading } = useAppSelector(state => state.auth);
    const { token, user } = getAuthDataService();


    if (!token && !user) {
        return <Navigate to='/login' />
    }

    if (user?.status !== 'active') {
        return <UnauthorizedPage text="You Are Blocked By Organozation, Please Contact!!" />
    }

    return <Outlet />
}

export default ProtectedRoutes