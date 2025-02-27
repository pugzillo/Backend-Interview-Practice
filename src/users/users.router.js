const router = require("express").Router({ mergeParams: true });
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:userId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .patch(controller.patch)
  .all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
