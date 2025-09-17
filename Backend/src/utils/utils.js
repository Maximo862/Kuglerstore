const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {pool} = require("../db/db")

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function comparePassword(password, verifiedpassword) {
   return await bcrypt.compare(password, verifiedpassword);
}

async function generateToken(id, secret, expiresin) {
     const token = jwt.sign({ id }, secret, {
          expiresIn: expiresin,
        });
        return token
}

async function verifyToken(token,secret) {
  try {
    const decoded = jwt.verify(token, secret)
    if (err) return null;

    const [rows] = await pool.execute("SELECT * FROM users WHERE id = ?", [
      decoded.id,
    ]);
    const user = rows[0];
    if (!user) return null;

return user; 
  } catch (error) {
      return null;
  }
}





module.exports = {
    hashPassword, comparePassword, generateToken, verifyToken
}