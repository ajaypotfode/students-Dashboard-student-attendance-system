// import UseAuth from "@/hooks/useAuthData"
import LoadingPage from "@/pages/loading/LoadingPage";
import { useAppSelector } from "@/redux/reduxHook"
import {type ReactNode } from "react";
// import { useEffect } from "react"
import { Navigate } from "react-router-dom"


const PublicdRoutes = ({ children }: { children: ReactNode }) => {
    const { isUserLogin, isUserLoading } = useAppSelector(state => state.auth)

    if (isUserLoading) {
        return <LoadingPage />
    }


    if (isUserLogin === true) {
        // console.log("login user true");
        return <Navigate to="/dashboard" replace />;
    }


    return <> {children}</>

}

export default PublicdRoutes