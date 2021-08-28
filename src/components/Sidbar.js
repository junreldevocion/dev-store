import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router";
import { ChartBarIcon, CollectionIcon, ClipboardListIcon, LogoutIcon } from "@heroicons/react/outline"
import Cookies from "js-cookie"

export default function Sidebar() {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="w-64 h-full flex-shrink-0 relative">
                <div className="h-20 flex items-center justify-start">
                    <NavLink to="/">
                        <h1 className="pl-8 font-semibold text-2xl"><span className="text-secondary-dark">Dev</span><span className="text-primary">Store!</span></h1>
                    </NavLink>
                </div>
                <div className="mt-5">
                    <h3 className="pl-8 font-semibold text-sm p-2">Pages</h3>
                    <NavLink to="/dashboard" className="bg-gradient-to-r from-secondary-light text-secondary-800 rounded font-normal flex items-center space-x-1 py-4 pl-10 text-sm">
                        <ChartBarIcon className="h-5 w-5" />
                        <span>Dashboard</span> 
                    </NavLink>
                    <NavLink to="/dashboard" className="font-normal flex items-center space-x-1 py-4 pl-10 text-sm text-primary hover:text-secondary-800 transition duration-200 ease-in-out">
                        <CollectionIcon className="h-5 w-5" />
                        <span>Product</span> 
                    </NavLink>
                    <NavLink to="/dashboard" className="font-normal flex items-center space-x-1 py-4 pl-10 text-sm text-primary hover:text-secondary-800 transition duration-200 ease-in-out">
                        <ClipboardListIcon className="h-5 w-5" />
                        <span>Category</span>
                    </NavLink>
                </div>
                <div className="absolute bottom-0 h-20 flex items-center w-full">
                    <NavLink to="/login" onClick={() => {
                            Cookies.remove('token')
                            navigate('/login')
                        }} 
                    className="font-normal cursor-pointer flex items-center space-x-1 py-4 pl-10 text-sm text-primary hover:text-secondary-800 transition duration-200 ease-in-out">
                        <LogoutIcon className="h-5 w-5" />
                        <span>Logout</span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}