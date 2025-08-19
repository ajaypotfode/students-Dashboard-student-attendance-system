import './App.css'
import AppRoutes from './routes/routes'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/reduxHook'
import { isUserLoggedIn } from './redux/slice/authSlice';
import { ToastContainer } from 'react-toastify'
// import { isLoginUser } from './redux/slice/authSlice'

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isUserLoggedIn())
  })

  return (
    <> <div className="react-toast mobile:text-md text-xs">
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
      <AppRoutes />
      {/* <BrowserRouter> */}
      {/* <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<CommonLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/summary' element={<AttendenceSummary />} />
            <Route path='/attendence' element={<AddAttendence />} />
            <Route path='/notification' element={<Notification />} />
          </Route>
        </Routes> */}
      {/* </BrowserRouter> */}

    </>
  )
}

export default App
