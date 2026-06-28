import React from 'react'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({children}) => {
    return (
        <div className="flex min-h-screen bg-slate-950 text-white">
            <Sidebar />

            <main className="flex-1 p-8">
                <Navbar />

                <div className="mt-10">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout