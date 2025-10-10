require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { router } = require("./routes/routes");
const cookieparser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://kuglerstore.vercel.app"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieparser());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});
