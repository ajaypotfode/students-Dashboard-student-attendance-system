import { NavLink } from 'react-router-dom';

import {
    LayoutDashboard,
    // BarChart,
    // CalendarCheck,
    ClipboardList,
    // CalendarRange,
    // Users,
    // Upload,
    // History,
    // UserCheck,
    // ShieldCheck,
    // Settings,
    // QrCode,
    Bell,
    SidebarClose,
    LogOut,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import UseCommonData from '@/hooks/useCommonData';
import UseAuth from '@/hooks/useAuthData';

const links = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Attendence", icon: ClipboardList, path: "/attendence" },
    { name: "Summary", icon: ClipboardList, path: "/summary" },
    { name: "Notification", icon: Bell, path: "/notification" },
    // { name: "Profile", icon: "bi-envelope", path: "/admin/subscribers" },
];


const Sidebar = () => {
    const { handleSidebar, sidebar } = UseCommonData();
    const { user, getUserLogout } = UseAuth()
    return (
        // <div className={`min-h-screen md:bg-transparent md:border-0 border-r  border-gray-600 bg-gray-800  sidebar 2xl:w-60 w-48 md:shadow-md md:shadow-transparent  shadow-2xl shadow-black text-[] p-6 pr-0 pt-0 inline-block  transform  transition-transform duration-300 ease-in-out relative z-10`}>
        <div className={`min-h-screen sidebar 2xl:w-60 xl:w-48 w-60 text-[] pr-0 pt-2 inline-block  transform  transition-transform duration-300 ease-in-out relative z-10  md:bg-transparent md:border-0 border-r  border-gray-600 bg-gray-800 md:shadow-transparent  shadow-2xl shadow-black  ${sidebar ? "" : "inActive"} `}>
            <div className=" w-full text-white  border-gray-500 flex relative" >

                {/* <div className=" w-full text-white  border-gray-500 flex relative" > */}
                <div

                    className={` nav-items flex items-center px-3 sm:pb-3 pb-2 rounded-lg w-full transition-all duration-300 group cursor-pointer`}
                >
                    {/* <span className="nav-icons"></span> */}
                    <Avatar className='border w-8 h-8'>
                        <AvatarImage src="https://github.com/shadcn.png" className='border' alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex-1 pl-2 text-start'>
                        <p className='text-xs'>{user?.userName}</p>
                        {/* <p className='text-[10px] text-gray-300'>ajay@gmail.com</p> */}
                        <p className='text-[10px] text-gray-500'>{user?.role}</p>
                    </div>
                </div>
                <button className='absolute top-0 right-0 active-icon ' onClick={handleSidebar} >
                    <SidebarClose className='w-5 h-5' />
                </button>
            </div>
            <div className='flex flex-col  overflow-y-auto h-[80%] pl-6 pb-10 scrollbar-hidden '>
                <ul className="space-y-1">
                    {links.map((item, idx) => {
                        // const isActive = pathname === item.path
                        return (
                            <li key={idx}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md smallsc1:text-sm text-[12px] text-white
                                        ${isActive ? "bg-gradient-to-bl from-gray-900 from-10% to-blue-950 to-60%" : ""}`
                                    }
                                >
                                    {/* <Bell */}
                                    <item.icon className="w-4 h-4" />
                                    {item.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="logout-btn-container  mb-5 w-full px-4  text-white  border-t border-gray-500 " >
                <button
                    onClick={getUserLogout}
                    className={` nav-items mt-2 flex items-center px-3 sm:py-3 py-2 rounded-lg w-full transition-all duration-300 group lg:hover:bg-black cursor-pointer`}
                >
                    {/* <span className="nav-icons"></span> */}
                    <LogOut className='w-5 h-5' />
                    <span className="navItem-text ml-3 smallsc1:text-md text-sm lg:group-hover:text-white ">Logout</span>
                </button>
            </div>
            {/* <div className='space-y-1 absolute bottom-2 right-0 left-0 '>
                    <p>Logout</p>
                </div> */}
            {/* </div>
                ))} */}
            {/* </div> */}
        </div>
    )
}

export default Sidebar
