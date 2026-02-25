import { getAuthDataService } from "@/service/localStorageService";
import { type ReactNode } from "react";
// import { useEffect } from "react"
import { Navigate } from "react-router-dom"


const PublicdRoutes = ({ children }: { children: ReactNode }) => {
    const { token, user } = getAuthDataService();


    if (token && user) {
        // console.log("login user true");
        return <Navigate to="/dashboard" replace />;
    }


    return <> {children}</>

}

export default PublicdRoutes