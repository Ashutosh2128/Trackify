import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import Input from "./Input";
import Button from "./Button";
import { createTask, updateTask  } from "../services/taskService";

const AddTaskModal = ({ isOpen, onClose, fetchTasks, selectedTask }) => {

    const [task, setTask] = useState({
        title: "",
        description: "",
        priority: "Medium",
        status: "Pending",
        dueDate: "",
    });

    useEffect(() => {
        if (selectedTask) {
            setTask({
                title: selectedTask.title || "",
                description: selectedTask.description || "",
                priority: selectedTask.priority || "Medium",
                status: selectedTask.status || "Pending",
                dueDate: selectedTask.dueDate
                    ? selectedTask.dueDate.substring(0, 10)
                    : "",
            });
        } else {
            setTask({
                title: "",
                description: "",
                priority: "Medium",
                status: "Pending",
                dueDate: "",
            });
        }
    }, [selectedTask, isOpen]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            if (selectedTask) {
                await updateTask(selectedTask._id, task);
                toast.success("Task Updated Successfully");
            } else {
                await createTask(task);
                toast.success("Task Created Successfully");
            }

            setTask({
                title: "",
                description: "",
                priority: "Medium",
                status: "Pending",
                dueDate: "",
            });

            fetchTasks();

            onClose();
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data?.message || "Failed to create task"
            );
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">
                        {selectedTask ? "Edit Task" : "Add New Task"}
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 transition hover:bg-slate-800"
                    >
                        <X />
                    </button>
                </div>

                <div className="space-y-5">
                    <Input
                        label="Task Title"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        placeholder="Enter task title"
                        required
                    />

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={task.description}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Enter task description"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Priority
                            </label>

                            <select
                                name="priority"
                                value={task.priority}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                            >
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Status
                            </label>

                            <select
                                name="status"
                                value={task.status}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                            >
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>

                    <Input
                        label="Due Date"
                        type="date"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                    />

                    <div className="flex justify-end gap-3">
                        <button
                            onClick={onClose}
                            className="rounded-xl border border-slate-700 px-5 py-3 text-white transition hover:bg-slate-800"
                        >
                            Cancel
                        </button>

                        <Button onClick={handleSubmit}>
                            {selectedTask ? "Update Task" : "Create Task"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;