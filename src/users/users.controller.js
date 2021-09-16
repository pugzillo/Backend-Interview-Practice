const service = require("./users.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    // res.send("OK");
    const users = await service.list();
    res.json({ users });
}

module.exports = {
    list,
};
