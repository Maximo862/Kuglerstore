const { InitDB } = require("../db/db");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

async function register(req, res) {
  try {
    console.log(req.body);

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ error: "invalid fields" });
    }

    const db = await InitDB();
    const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
    if (user)
      return res.status(400).json({ error: "That user already exists" });

    const hasedpassword = await bcrypt.hash(password, 10);

    const result = await db.run(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hasedpassword]
    );

    const token = jsonwebtoken.sign(
      { id: result.lastID },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .cookie("token", token)
      .json({
        message: "User created",
        user: { id: result.lastID, username, email },
        token,
      });
  } catch (err) {
    console.error("error in register: ", err);
    res.status(500).json({ error: "Error in register" });
  }
}

async function login(req, res) {
  try {
    console.log(req.body);

    const { email, password } = req.body;

    const db = await InitDB();
    const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);

    if (!user) return res.status(400).json({ error: "user not found" });

    const passwordfound = await bcrypt.compare(password, user.password);
    if (!passwordfound)
      return res.status(400).json({ error: "incorret password" });

    const token = jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .cookie("token", token)
      .json({
        message: "Succesful login",
        user: { id: user.lastID, username: user.username, email },
        token,
      });
  } catch (err) {
    console.error("error in login:", err);
    return res.status(500).json({ error: "Error en login" });
  }
}

async function logout(req, res) {
res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.status(200).json({ message: "sesion cerrada correctamente" });
}

async function verify(req, res) {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ error: "Unauthorized" });

  jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, tok) => {
    if (err) return res.status(401).json({ error: "Unauthorized" });
    return res.json({ message: "valid token", userId: tok.id });
  });
}

module.exports = {
  login,
  register,
  logout,
  verify,
};
