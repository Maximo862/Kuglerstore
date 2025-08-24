const sqlite3 = require("sqlite3")
const {open} = require("sqlite")

async function InitDB() {
    const db = await open({
        filename: ".ecommerce.db",
        driver: sqlite3.Database
    })

await db.exec(` 
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
    )
    `)

    return db
}

module.exports = {
    InitDB
}