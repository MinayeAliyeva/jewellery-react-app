const router = require("express").Router();
const usersDb = [
  { id: 1, name: "test1", password: "test1234" },
  { id: 2, name: "test2", password: "test12345" },
];
router.get("/", async (req, res) => {
  res.status(200).send({
    data: usersDb,
  });
});
router.get("/:userId", async (req, res) => {
  console.log(req.params.userId);
  const userId = req.params.userId;
  const findedUser = usersDb.find((user) => user.id.toString() === userId);
  if (!findedUser) {
    res.status(404).send({
      message: "User not faund!",
    });
    return;
  }
  res.status(200).send({
    data: findedUser,
  });
});
module.exports = router;
