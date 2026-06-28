import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import StatCard from "../components/StatCard";
import TaskSection from "../components/TaskSection";
import { getTasks } from "../services/taskService";
import toast from "react-hot-toast";

const Dashboard = () => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");

    const fetchTasks = async () => {
        try {
            setLoading(true);

            const response = await getTasks(
                search,
                status,
                priority
            );

            setTasks(response.data.tasks);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load tasks");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [search, status, priority]);

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.status === "Completed"
    ).length;

    const pendingTasks = tasks.filter(
        (task) => task.status === "Pending"
    ).length;

    const overdueTasks = tasks.filter((task) => {
        if (!task.dueDate) return false;

        return (
            new Date(task.dueDate) < new Date() &&
            task.status !== "Completed"
        );
    }).length;

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex h-[70vh] items-center justify-center">

                    <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Dashboard
                    </h1>

                    <p className="mt-1 text-slate-400">
                        Welcome back! Manage all your tasks from one place.
                    </p>
                </div>

                <div className="flex flex-col gap-3 md:flex-row">
                    <div className="relative">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search tasks..."
                            className="rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                    >
                        <option value="">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                    >
                        <option value="">All Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Total Tasks"
                    value={totalTasks}
                    color="text-blue-500"
                />

                <StatCard
                    title="Completed"
                    value={completedTasks}
                    color="text-green-500"
                />

                <StatCard
                    title="Pending"
                    value={pendingTasks}
                    color="text-yellow-500"
                />

                <StatCard
                    title="Overdue"
                    value={overdueTasks}
                    color="text-red-500"
                />
            </div>

            <TaskSection
                tasks={tasks}
                fetchTasks={fetchTasks}
            />
        </DashboardLayout>
    );
};

export default Dashboard;