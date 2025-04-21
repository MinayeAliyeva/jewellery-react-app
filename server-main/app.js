const express = require("express");
const registerRouter = require("./routes/registerRouter");
const userRouter = require("./routes/userRouter");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connectionDb } = require("./db");
const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", registerRouter);
app.use("/api/users", userRouter);

// connectionDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
