import './App.css'
import AppRoutes from './routes/routes'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom';
// import { isLoginUser } from './redux/slice/authSlice'

function App() {

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
