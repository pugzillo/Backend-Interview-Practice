const knex = require('../db/connection');

function list() {
    return knex.table("users").select("*");
}

function read(user_id) {
    return knex.table("users").select("*").where({ user_id });
}

module.exports = {
    list,
    read,  
};
