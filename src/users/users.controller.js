const service = require("./users.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary"); // handles async errors insteads of using try/catch

async function userExists(req, res, next) {
  const userId = req.params.userId;
  const user = await service.read(userId);
  if (user) {
    res.locals.user = user;
    return next();
  }
  next({ error: 404, message: "User does not exist" });
}

async function list(req, res) {
  const users = await service.list();
  res.json({ users });
}

async function read(req, res, next) {
  const { user: data } = res.locals;
  res.json({ data });
}

async function update(req, res, next) {
  const updatedUser = {
    ...req.body.data,
    user_id: res.locals.user.user_id,
  };
  const user = await service.update(updatedUser);
  res.json({ user });
}

async function destroy(req, res, next) {
  const userId = res.locals.user.user_id;
  const data = await service.destroy(userId);
  res.sendStatus(204);
}

async function patch(req, res, next) {
  const userId = res.locals.user.user_id;
  const updatedData = req.body.data;
  const updatedUser = await service.patch(userId, updatedData);
  res.json({ updatedUser });
}

async function patch(req, res, next) {
    const userId = res.locals.user.user_id;
    const updatedData = req.body.data;
    const updatedUser = await service.patch(userId, updatedData);
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(userExists), asyncErrorBoundary(read)],
  update: [asyncErrorBoundary(userExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(userExists), asyncErrorBoundary(destroy)],
  patch: [asyncErrorBoundary(userExists), asyncErrorBoundary(patch)],
};
