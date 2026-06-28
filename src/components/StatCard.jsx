import React from 'react'

const StatCard = ({ title, value, color }) => {
    return (
        <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl">
            <p className="text-sm font-medium text-slate-400">
                {title}
            </p>

            <div className="mt-4 flex items-end justify-between">

                <h2 className={`text-4xl font-bold ${color}`}>
                    {value}
                </h2>

                <div className={`h-3 w-3 rounded-full ${color.replace("text", "bg")}`}></div>

            </div>
        </div>
    );
};

export default StatCard