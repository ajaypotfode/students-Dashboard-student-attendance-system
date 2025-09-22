import './App.css'
import AppRoutes from './routes/routes'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/reduxHook'
import { isUserLoggedIn } from './redux/slice/authSlice';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom';
// import { isLoginUser } from './redux/slice/authSlice'

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(isUserLoggedIn())
  },[])

  return (
    <>
      <div className="react-toast mobile:text-md text-xs">
        <ToastContainer position="top-right" autoClose={1000} />
      </div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>

    </>
  )
}

export default App
