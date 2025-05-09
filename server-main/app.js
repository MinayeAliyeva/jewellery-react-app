const express = require("express");
const registerRouter = require("./routes/registerRouter");
const userRouter = require("./routes/userRouter");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { connectionDb } = require("./db");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("origin", origin);

      callback(null, true); // İstənilən origin-i qəbul et
    },
    credentials: true,
    // methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", registerRouter);
app.use("/api/users", userRouter);

// connectionDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
