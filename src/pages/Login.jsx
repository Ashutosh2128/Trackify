import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { login } from "../services/authService";
import toast from "react-hot-toast";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await login(formData);

            localStorage.setItem("token", response.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            toast.success("Login Successful");

            navigate("/dashboard");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Login Failed"
            );
        }
    };

    return (
        <AuthLayout>
            <div className="space-y-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">
                        Trackify
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Welcome back! Sign in to continue.
                    </p>
                </div>

                <div className="space-y-4">
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <Button onClick={handleSubmit}>
                    Login
                </Button>

                <p className="text-center text-sm text-slate-400">
                    Don't have an account?

                    <Link
                        to="/signup"
                        className="ml-2 font-semibold text-blue-500 transition hover:text-blue-400"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </AuthLayout>
    );
};

export default Login;