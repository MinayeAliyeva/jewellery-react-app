const { addUser, registeredUsers, getUsers } = require("../db/users");
const { v4: uuidv4 } = require("uuid");
const router = require("express").Router();

router.post("/register", async (req, res) => {
  const { name, surname, email, password, tel } = req.body;
  if (!name || !email || !password) {
    res.status(400).send("Email ve Password teleb olunur!!!");
  }
  const exsistUser = registeredUsers?.find((user) => user?.email === email);

  if (exsistUser) {
    res.status(400).send("Bele isdifadeci movcuddur , login ol");
    return;
  }
  const accessToken = uuidv4();
  const refreshToken = uuidv4();
  const newUser = {
    id: Date.now(),
    name,
    surname,
    email,
    password,
    tel,
    refreshToken,
    accessToken,
  };

  await addUser(newUser); // db kayd et
  res.status(201).send(newUser);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  console.log("users", users);
  if (!email || !password) {
    res.status(404).send({ message: "email ve password teleb olunur!!" });
  }
  const findedUser = users?.find((user) => user.email === email);

  if (!findedUser) {
    res.status(404).send({ message: "Isdifadeci emaili yanlisdir!" });
    return;
  }

  const accessToken = uuidv4();
  const refreshToken = uuidv4();

  res.status(200).send({
    accessToken,
    refreshToken,
    message: "İstifadəçi uğurla login oldu!",
    user: findedUser,
  });
});

router.get("/refreshToken", async (req, res) => {
  res.status(200).send("Test1!");
});
module.exports = router;
