if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const usersRouter = require("./users/users.router");
const postsRouter = require("./posts/posts.router");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

// needed to read request body
app.use(express.json());

// routes
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
