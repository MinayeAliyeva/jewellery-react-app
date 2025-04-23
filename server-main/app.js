const express = require("express");
const registerRouter = require("./routes/registerRouter");
const userRouter = require("./routes/userRouter");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { connectionDb } = require("./db");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cookieParser());
app.use(cors({
  origin: function (origin, callback) {
      console.log("origin", origin);
      
      callback(null, true); // İstənilən origin-i qəbul et
  },
  credentials: true,
  // methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use( express.json() );

app.use("/api/auth", registerRouter);
app.use("/api/users", userRouter);

// connectionDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
