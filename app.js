const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { ErrorHandler } = require("./Middleware/ErrorMiddleware");

const connectDB = require("./Config/Db");
connectDB();

const port = process.env.PORT || 3300;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/api/notes", require("./Routes/NoteRoutes"));

// app.use(ErrorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
