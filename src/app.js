if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const usersRouter = require("./users/users.router");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

// routes
app.use("/users", usersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
