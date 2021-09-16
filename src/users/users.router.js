const router = require("express").Router({ mergeParams: true });
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:userId").get(controller.read);
router.route("/").get(controller.list); 

module.exports = router;
