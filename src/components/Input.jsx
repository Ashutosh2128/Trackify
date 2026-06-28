import React from 'react'

const Input = ({label, type = "text", placeholder, value, onChange, name, required = false, error = ""}) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
                {label}
                {required && (
                    <span className="text-red-500"> *</span>
                )}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full rounded-xl border bg-slate-900 px-4 py-3 text-white outline-none transition-all duration-300
                ${
                    error
                        ? "border-red-500"
                        : "border-slate-700 focus:border-blue-500"
                }`}
            />

            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    )
}

export default Input