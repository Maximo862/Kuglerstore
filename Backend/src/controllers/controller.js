const { pool } = require("../db/db");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

async function register(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "invalid fields" });
    }

    const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const user = rows[0];
    if (user)
      return res.status(400).json({ error: "That user already exists" });

    const hasedpassword = await bcrypt.hash(password, 10);

    const [result] = await pool.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hasedpassword]
    );

    const token = jsonwebtoken.sign(
      { id: result.insertId },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly : true,
      secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
    }).json({
      message: "User created",
      user: { id: result.insertId, username, email }
    });
  } catch (err) {
    console.error("REGISTER ERROR ❌", err);
    res.status(500).json({ error: "Error: ", err });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const [rows] = await pool.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const user = rows[0];
    if (!user) return res.status(400).json({ error: "User not found" });

    const passwordfound = await bcrypt.compare(password, user.password);
    if (!passwordfound)
      return res.status(400).json({ error: "Incorret password" });

    const token = jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.cookie("token", token, {
      httpOnly : true,
    secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
    }).json({
      message: "Succesful login",
      user: { id: user.id, username: user.username, email },
    });
  } catch (err) {
    return res.status(500).json({ error: "Error" });
  }
}

async function logout(req, res) {
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  expires: new Date(0),
};

  res.cookie("token", "", cookieOptions)
  return res.status(200).json({ message: "Logout successful" });
}

async function verify(req, res) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jsonwebtoken.verify(token, process.env.JWT_SECRET, async (err, tok) => {
    if (err) return res.status(401).json({ error: "Unauthorized" });

    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [
      tok.id,
    ]);
    const user = rows[0];

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    return res.json({ message: "valid token", user });
  });
}

module.exports = {
  login,
  register,
  logout,
  verify,
};
