const service = require("./posts.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const posts = await service.list();
  res.json({ posts });
}

async function read(req, res) {
  const postId = req.params.postId;
  const post = await service.read(postId);
  res.send({ post });
}

module.exports = {
  list,
  read,
};
