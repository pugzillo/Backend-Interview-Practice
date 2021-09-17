const service = require("./comments.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function commentExists(req, res, next) {
  const { commentId } = req.params;
  const comment = await service.read(commentId);
  if (comment) {
    res.locals.comment = comment;
    return next();
  }
  next({ error: 404, message: 'Comment does not exist'});
}

async function list(req, res, next) {
  const { postId } = req.params;
  if (postId) {
    const data = await service.list(parseInt(postId));
    res.json({ data });
  } else {
    const data = await service.list();
    res.json({ data });
  }
}

async function read(req, res, next) {
  const comment = res.locals.comment;
  res.json({ comment });
}

async function update(req, res, next) {
  const updatedComment = req.body.data;
  const data = await service.update(updatedComment);
  res.json({ data });
}

async function patch(req, res) {
  const commentId = res.locals.comment.comment_id;
  const patchedComment = req.body.data;
  const data = await service.patch(commentId, patchedComment);
  res.json({ data });
}

async function destroy(req, res) {
  const commentId = res.locals.comment.comment_id;
  await service.destroy(commentId);
  res.sendStatus(204);
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [commentExists, read],
  update: [commentExists, update],
  patch: [commentExists, patch],
  destroy: [commentExists, destroy],
};
