const service = require("./users.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary"); // handles async errors insteads of using try/catch

async function list(req, res) {
  const users = await service.list();
  res.json({ users });
}

async function read(req, res) {
  const userId = req.params.userId; 
  const user = await service.read(userId);
  res.json({ user });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read,
};
