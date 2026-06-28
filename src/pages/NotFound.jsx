import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
            <h1 className="text-8xl font-extrabold text-blue-500">
                404
            </h1>

            <h2 className="mt-4 text-3xl font-bold">
                Page Not Found
            </h2>

            <p className="mt-3 text-center text-slate-400">
                The page you are looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;