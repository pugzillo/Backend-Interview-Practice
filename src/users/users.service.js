const knex = require("../db/connection");

function list() {
  return knex.table("users").select("*");
}

function read(user_id) {
  return knex.table("users").select("*").where({ user_id }).first();
}

function update(updatedUser) {
  return knex
    .table("users")
    .where({ user_id: updatedUser.user_id })
    .update(updatedUser, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function destroy(user_id) {
  return knex.table("users").where({ user_id }).del();
}

function patch(user_id, updatedData) {
  return knex
    .table("users")
    .where({ user_id })
    .update(updatedData)
    .then((updatedRecords) =>
      knex.table("users").select("*").where({ user_id }).first()
    );
}

module.exports = {
  list,
  read,
  update,
  destroy,
  patch,
};
