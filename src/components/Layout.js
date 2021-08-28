import Sidebar from "./Sidbar";
import Navbar from "./Navbar";

export default function Layout({children}) {
    return  (
        <>
            <div className="bg-light h-screen w-full flex font-roboto">
                <Sidebar />
                <div className="bg-primary-light w-full">
                    <Navbar />   
                </div> 
            </div>       
        </>
    )
}