const knex = require('../db/connection');

function list() {
    return knex.table("users").select("*");
}

module.exports = {
    list, 
};
