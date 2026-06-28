import React, { useState } from "react";
import { Plus } from "lucide-react";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

const TaskSection = ({ tasks, fetchTasks }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    return (
        <section className="mt-10">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-white">
                        Recent Tasks
                    </h2>

                    <p className="mt-1 text-slate-400">
                        Manage and organize your daily tasks.
                    </p>
                </div>

                <button
                    onClick={() => {
                        setSelectedTask(null);
                        setIsModalOpen(true);
                    }}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                >
                    <Plus size={18} />
                    Add Task
                </button>
            </div>

            {/* Task List */}
            <div className="mt-6 space-y-4">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskCard
                            key={task._id}
                            task={task}
                            fetchTasks={fetchTasks}
                            onEdit={(task) => {
                                setSelectedTask(task);
                                setIsModalOpen(true);
                            }}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900 py-20 text-center">
                        <h3 className="text-2xl font-bold text-white">
                            🎉 No Tasks Yet
                        </h3>

                        <p className="mt-3 max-w-md text-slate-400">
                            Create your first task and start organizing your work efficiently.
                        </p>

                        <button
                            onClick={() => {
                                setSelectedTask(null);
                                setIsModalOpen(true);
                            }}
                            className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            + Create First Task
                        </button>
                    </div>
                )}
            </div>

            <AddTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                fetchTasks={fetchTasks}
                selectedTask={selectedTask}
            />
        </section>
    );
};

export default TaskSection;