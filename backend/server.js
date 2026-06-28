const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/task", taskRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Trackify Backend is Running 🚀",
    });
});

const PORT = process.env.PORT || 5000;

const connectDB = require("./config/database");
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});