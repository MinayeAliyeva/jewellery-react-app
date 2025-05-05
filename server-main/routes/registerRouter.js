const { v4: uuidv4 } = require("uuid");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
} = require("../utils/token");
const router = require("express").Router();
const registeredUsers = [
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "Admin@1234",
    isAdmin: true,
  },
];
router.post("/register", async (req, res) => {
  const { name, surname, email, password, tel } = req.body;

  const user = { name, surname, email, password, tel };
  try {
    if (!name || !email || !password) {
      res.status(400).send("Email ve Password teleb olunur!!!");
    }
    const exsistUser = registeredUsers?.find((user) => user?.email === email);
    if (exsistUser) {
      res.status(400).send("Bele isdifadeci movcuddur , login ol");
      return;
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    console.log("register refreshToken", refreshToken);

    const newUser = {
      id: uuidv4(),
      name,
      surname,
      email,
      password,
      tel,
      refreshToken,
      accessToken,
      isAdmin: req.body.isAdmin ?? false,
    };
    await registeredUsers.push(newUser);

    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false, // `true` in production with HTTPS
        sameSite: "Strict",
        // maxAge: 7 * 24 * 60 * 60 * 1000, // 7 gün
      })
      .status(201)
      .send({ accessToken });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(404).send({ message: "email ve password teleb olunur!!" });
      return;
    }
    const findedUser = registeredUsers?.find((user) => user.email === email);

    if (!findedUser) {
      res.status(404).send({ message: "Isdifadeci emaili yanlisdir!" });
      return;
    }
    console.log("findedUser", findedUser);

    const accessToken = generateAccessToken(findedUser);
    const refreshToken = generateRefreshToken(findedUser);

    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false, // `true` in production with HTTPS
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 gün
      })
      .status(200)
      .send({ accessToken });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/logout", async (req, res) => {
  console.log("req", req.cookies);

  const { refreshToken } = req.cookies;
  console.log("refreshToken", refreshToken);

  try {
    if (!refreshToken) {
      return res.status(400).json({ message: "Refresh token is required" });
    }

    const findedUserIndex = registeredUsers.findIndex(
      (user) => user.refreshToken === refreshToken
    );
    console.log("findedUserIndex", findedUserIndex);

    if (findedUserIndex === -1) {
      return res.status(404).json({ message: "Refresh token not found" });
    }
    //!await for DB
    delete registeredUsers[findedUserIndex].accessToken;
    delete registeredUsers[findedUserIndex].refreshToken;
    console.log("FINAL", registeredUsers);
    res
      .clearCookie("refreshToken")
      .status(200)
      .send({ message: "Logout is succesuflly!" });
    res.status(200).json({ message: "Logged out", registeredUsers });
  } catch (error) {
    console.log("ERROR:", error);
    return res.status(500).send(error);
  }
});

//refresh token ile sorgu atildiqda api/auth/refresh ===> req headerinde auth fildinde berear token gondereceksen ,
router.get("/refreshToken", async (req, res) => {
  res.status(200).send("Test1!");
});
module.exports = router;
