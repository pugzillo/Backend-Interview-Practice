const router = require("express").Router({ mergeParams: true });
const controller = require("./comments.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/:commentId")
  .get(controller.read)
  .put(controller.update)
  .patch(controller.patch)
  .delete(controller.destroy)
  .all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
