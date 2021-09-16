const knex = require("../db/connection");

function list() {
  return knex.table("posts").select("*");
}

function read(post_id) {
  return knex.table("posts").where({ post_id }).select("*").first();
}

module.exports = {
  list,
  read,
};
