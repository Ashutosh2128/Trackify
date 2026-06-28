import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const Landing = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Navbar */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <h1 className="text-3xl font-bold text-blue-500">
                    Trackify
                </h1>

                <div className="flex items-center gap-4">
                    <Link
                        to="/login"
                        className="rounded-lg px-5 py-2 text-slate-300 transition hover:text-white"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="rounded-lg bg-blue-600 px-5 py-2 font-semibold transition hover:bg-blue-700"
                    >
                        Sign Up
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
                <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
                    Manage Your Tasks
                    <span className="text-blue-500"> Smarter.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-slate-400">
                    Organize your work, track your progress,
                    and stay productive with a clean and modern
                    task management application.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link
                        to="/signup"
                        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
                    >
                        Get Started
                        <ArrowRight size={20} />
                    </Link>

                    <Link
                        to="/login"
                        className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:bg-slate-900"
                    >
                        Login
                    </Link>
                </div>
            </section>

            {/* Features */}
            <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 md:grid-cols-3">
                {[
                    "Create, update and delete tasks",
                    "Filter by priority and status",
                    "Powerful search with clean dashboard",
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
                    >
                        <CheckCircle
                            className="mb-4 text-green-500"
                            size={32}
                        />

                        <h3 className="mb-2 text-xl font-semibold">
                            {feature}
                        </h3>

                        <p className="text-slate-400">
                            Built with the MERN stack using
                            React, Express, MongoDB and JWT
                            Authentication.
                        </p>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
                © {new Date().getFullYear()} Trackify • Built with React & Node.js
            </footer>
        </div>
    );
};

export default Landing;