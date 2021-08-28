import { useState, useEffect } from "react"
import { MenuAlt2Icon } from "@heroicons/react/outline"

export default function Navbar() {
    const locale = 'en'
    const [today, setToday] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    
    const day = today.toLocaleDateString(locale, { weekday: 'short' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: '2-digit' });

    return (
        <>
            <nav className="h-20 w-full bg-light flex items-center">
                <div className="bg-secondary-light p-2 rounded cursor-pointer ml-8 text-secondary-800 group hover:bg-secondary-dark transition duration-200 ease-in-out">
                    <MenuAlt2Icon className="h5 w-5 group-hover:text-light" />
                </div>
                <div className="flex w-full items-center m-8">
                    <div className="flex flex-col items-end justify-center flex-1 w-48 text-right"> 
                        <div className="flex flex-col items-center justify-center">
                            <h4 className="font-normal text-sm">{wish} <span>Alpha</span></h4>
                            <span className="text-primary-800 text-opacity-40 text-xs">{date} {time}</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}