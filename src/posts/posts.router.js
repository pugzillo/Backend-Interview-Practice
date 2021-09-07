const router = require("express").Router({ mergeParams: true });
const controller = require("./posts.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

module.exports = router;
