require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { router } = require("./routes/routes");
const cookieparser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://kuglerstore.vercel.app"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Origin",
    "https://kuglerstore.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.options("/", cors());

app.use(cookieparser());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});
