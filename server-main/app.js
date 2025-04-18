const express = require("express");
const registerRouter = require("./routes/registerRouter");
const userRouter = require("./routes/userRouter");
const { connectionDb } = require("./db");
const app = express();
const port = 8000;

app.use(express.json());

app.use("/api/auth", registerRouter);
app.use("/api/users", userRouter);

connectionDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
