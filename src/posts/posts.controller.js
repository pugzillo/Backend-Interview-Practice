const service = require("./posts.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function postExists(req, res, next) {
  const postId = req.params.postId;
  const post = await service.read(postId);
  if (post) {
    res.locals.post = post;
    return next();
  }
  return next({ status: 404, message: "Post does not exist" });
}

async function list(req, res) {
  const posts = await service.list();
  res.json({ posts });
}

async function read(req, res) {
  const data = res.locals.post;
  res.send({ data });
}

async function update(req, res) {
  const postId = res.locals.post.post_id;
  const updatedPost = {
    ...req.body.data,
    post_id: postId,
  };
  const data = await service.update(updatedPost);
  res.json({ data });
}

async function destroy(req, res) {
  const postId = res.locals.post.post_id;
  console.log(postId);
  await service.destroy(postId);
  res.sendStatus(204);
}

async function patch(req, res) {
  const postId = res.locals.post.post_id;
  const patchedPost = req.body.data;
  const updatedData = await service.patch(postId, patchedPost);
  res.json({ updatedData });
}

module.exports = {
  list,
  read: [postExists, read],
  update: [postExists, update],
  destroy: [postExists, destroy],
  patch: [postExists, patch],
};
