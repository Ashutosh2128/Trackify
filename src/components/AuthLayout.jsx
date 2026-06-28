import React from 'react'

const AuthLayout = ({children}) => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 p-6">

            {/* Background Blur */}
            <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"></div>

            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

            {/* Login Card */}
            <div className="relative w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">

                {children}

            </div>

        </div>
    )
}

export default AuthLayout