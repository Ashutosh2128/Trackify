const Task = require("../models/Task");

exports.createTask = async (req, res) => {
    try {
        const {
            title,
            description,
            priority,
            status,
            dueDate,
        } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Task title is required",
            });
        }

        const task = await Task.create({
            title,
            description,
            priority,
            status,
            dueDate,
            user: req.user.id,
        });

        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            task,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

exports.getMyTasks = async (req, res) => {
    try {
        const {
            search = "",
            status = "",
            priority = "",
        } = req.query;

        const filter = {
            user: req.user.id,
        };

        if (search) {
            filter.title = {
                $regex: search,
                $options: "i",
            };
        }

        if (status) {
            filter.status = status;
        }

        if (priority) {
            filter.priority = priority;
        }

        const tasks = await Task.find(filter).sort({
            createdAt: -1,
        });

        return res.status(200).json({
            success: true,
            tasks,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

exports.updateTask = async (req, res) => {
    try {

        const { id } = req.params;

        const task = await Task.findOne({
            _id: id,
            user: req.user.id,
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            task: updatedTask,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });

    }
};

exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findOne({
            _id: id,
            user: req.user.id,
        });

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        await Task.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully",
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};