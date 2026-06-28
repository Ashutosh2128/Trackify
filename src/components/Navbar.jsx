import React from "react";
import { Search, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear();

        toast.success("Logged out successfully");

        navigate("/login");

    };

    return (
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-3xl font-bold">
                    Welcome Back 👋
                </h2>

                <p className="mt-1 text-slate-400">
                    Manage your tasks efficiently.
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2">

                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent outline-none"
                    />

                </div>

                <button
                    onClick={handleLogout}
                    className="rounded-xl bg-red-600 p-3 text-white transition hover:bg-red-700"
                >
                    <LogOut size={20} />
                </button>

                <img
                    src={`https://ui-avatars.com/api/?name=${
                        JSON.parse(localStorage.getItem("user"))?.name || "User"
                    }`}
                    alt="profile"
                    className="h-11 w-11 rounded-full"
                />
            </div>
        </header>
    );
};

export default Navbar