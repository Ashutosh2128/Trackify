import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signup } from "../services/authService";

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {

            const response = await signup({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });

            // localStorage.setItem("token", response.data.token);

            toast.success("Account created successfully");

            navigate("/login");

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Signup Failed"
            );

        }
    };

    return (
        <AuthLayout>
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">
                        Create Account
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Join Trackify and start managing your tasks.
                    </p>
                </div>

                <div className="space-y-4">
                    <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />

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

                    <Input
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        required
                    />
                </div>

                <Button type="submit">
                    Create Account
                </Button>

                <p className="text-center text-sm text-slate-400">
                    Already have an account?

                    <Link
                        to="/login"
                        className="ml-2 font-semibold text-blue-500 hover:text-blue-400"
                    >
                        Login
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Signup;