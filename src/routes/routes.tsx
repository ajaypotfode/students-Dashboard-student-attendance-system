import CommonLayout from '@/CommonLayout'
import AddAttendence from '@/pages/attendence/AddAttendence'
import Dashboard from '@/pages/dashboard/Dashboard'
import Login from '@/pages/login/Login'
import Notification from '@/pages/notification/Notification'
import AttendenceSummary from '@/pages/summary/AttendenceSummary'
// import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            {/* <Route element={<ProtectedRoutes />}> */}
            <Route element={<CommonLayout />}>
                <Route path='/' element={<Navigate to='/dashboard' />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/summary' element={<AttendenceSummary />} />
                <Route path='/attendence' element={<AddAttendence />} />
                <Route path='/notification' element={<Notification />} />
            </Route>
            {/* </Route> */}
        </Routes>
    )
}

export default AppRoutes