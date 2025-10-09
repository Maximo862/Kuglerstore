const { pool } = require("../db/db");
const {hashPassword, comparePassword, generateToken, verifyToken} = require("../utils/utils")

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

    const hasedpassword = await hashPassword(password)

    const [result] = await pool.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hasedpassword]
    );

    const token = await generateToken(result.insertId, process.env.JWT_SECRET, "1h")

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        message: "User created",
        user: { id: result.insertId, username, email },
      });
  } catch (err) {
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

  const passwordfound = await comparePassword(password, user.password)
  if (passwordfound == null) return res.status(400).json({ error: "Incorret password" });

  const token = await generateToken(user.id, process.env.JWT_SECRET, "1h")

    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
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
    secure: true,
    sameSite: "none",
    expires: new Date(0),
  };

  res.cookie("token", "", cookieOptions);
  return res.status(200).json({ message: "Logout successful" });
}

async function verify(req, res) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  const user = verifyToken(token, process.env.JWT_SECRET)
 if (user == null) return res.status(401).json({ error: "Unauthorized" });

    return res.json({ message: "valid token", user });
  };

module.exports = {
  login,
  register,
  logout,
  verify,
};
