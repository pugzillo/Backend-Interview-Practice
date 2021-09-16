const router = require("express").Router({ mergeParams: true });
const controller = require("./posts.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:postId").get(controller.read);
router.route("/").get(controller.list);

module.exports = router;
