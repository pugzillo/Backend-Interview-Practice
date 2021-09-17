const knex = require("../db/connection");

function list() {
  return knex.table("posts").select("*");
}

function read(post_id) {
  return knex.table("posts").where({ post_id }).select("*").first();
}

function update(updatedPost) {
  return knex
    .table("posts")
    .where({ post_id: updatedPost.post_id })
    .update(updatedPost, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function destroy(post_id) {
  return knex.table("posts").where({ post_id }).del();
}

function patch(post_id, patchedPost) {
  return knex
    .table("posts")
    .where({ post_id })
    .update(patchedPost)
    .then((updatedRecords) =>
      knex.table("posts").where({ post_id }).select("*").first()
    );
}

module.exports = {
  list,
  read,
  update,
  destroy,
  patch,
};
