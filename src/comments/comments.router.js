const router = require("express").Router({ mergeParams: true });
const controller = require("./comments.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:commentId").get(controller.read)
router.route("/").get(controller.list)

module.exports = router;
