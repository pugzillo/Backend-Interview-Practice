const router = require("express").Router({ mergeParams: true });
const controller = require("./posts.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const commentsRouter = require("../comments/comments.router");

router.use("/:postId/comments", commentsRouter);
router
  .route("/:postId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy)
  .patch(controller.patch)
  .all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
