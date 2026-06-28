import React from "react";
import { CalendarDays, Flag, SquarePen, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { deleteTask } from "../services/taskService";

const TaskCard = ({ task, fetchTasks, onEdit }) => {

    const {
        title,
        description,
        priority,
        status,
        dueDate,
    } = task;

    const priorityColor = {
        High: "bg-red-500/20 text-red-400",
        Medium: "bg-yellow-500/20 text-yellow-400",
        Low: "bg-green-500/20 text-green-400",
    };

    const handleDelete = async () => {
        try {
            await deleteTask(task._id);

            toast.success("Task Deleted");

            fetchTasks();
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data?.message || "Failed to delete task"
            );
        }
    };

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-300 hover:border-slate-700">   
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-xl font-semibold text-white">
                        {title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                        {description}
                    </p>
                </div>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityColor[priority]}`}
                >
                    {priority}
                </span>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-5 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        {dueDate
                            ? new Date(dueDate).toLocaleDateString()
                            : "No Date"}
                    </div>

                    <div className="flex items-center gap-2">
                        <Flag size={16} />
                        {status}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onEdit(task)} 
                        className="rounded-lg p-2 transition hover:bg-slate-800"
                    >
                        <SquarePen size={18} />
                    </button>

                    <button 
                        onClick={handleDelete}
                        className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;