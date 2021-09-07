const router = require("express").Router({ mergeParams: true });
const controller = require("./comments.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

module.exports = router;
