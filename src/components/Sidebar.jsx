import React from 'react'
import { LayoutDashboard, CheckSquare, BarChart3, Settings } from "lucide-react";

const Sidebar = () => {
    return (
        <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
            {/* Logo */}
            <h1 className="text-3xl font-bold text-blue-500">
                Trackify
            </h1>

            {/* Navigation */}
            <nav className="mt-10 flex flex-col gap-3">

                <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    <LayoutDashboard size={20} />
                    Dashboard
                </button>

                <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    <CheckSquare size={20} />
                    My Tasks
                </button>

                <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    <BarChart3 size={20} />
                    Analytics
                </button>

                <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white">
                    <Settings size={20} />
                    Settings
                </button>

            </nav>
        </aside>
    );
};

export default Sidebar