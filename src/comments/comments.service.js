const knex = require("../db/connection");

function list(post_id) {
  if (post_id) {
    return knex("comments").where({ post_id: post_id }).select("*");
  }
  return knex("comments").select("*");
}

function read(comment_id) {
  return knex.table("comments").where({ comment_id }).select("*").first();
}

function update(updatedComment) {
  return knex
    .table("comments")
    .where({ comment_id: updatedComment.comment_id })
    .update(updatedComment, "*")
    .then((updatedRecord) => updatedRecord[0]);
}

module.exports = {
  list,
  read,
  update,
};
