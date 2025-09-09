const express = require("express");
const cors = require("cors");
const { router } = require("./routes/routes");
require("dotenv").config();
const cookieparser = require("cookie-parser");
const { pool } = require("./db/db");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173",
    "https://kuglerstore.vercel.app/"
    ],
    credentials: true,
  })
);
app.use(cookieparser());
app.use(router);


async function testConnection() {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("DB Connected ✅", rows);
  } catch (err) {
    console.error("DB Connection error ❌", err);
  }
}
testConnection()

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`SERVIDOR CORRIENDO EN http://localhost:${PORT}`);
});
