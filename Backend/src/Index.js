const express = require("express")
const cors = require("cors")
const {InitDB} = require("./db/db")
const {router} = require("./routes/routes")
require("dotenv").config();
const cookieparser = require("cookie-parser")

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieparser())
app.use(router)

const PORT = process.env.PORT || 3000; 
app.listen(PORT, async () => {
console.log(`SERCIDOR CORRIENDO ENNNN http://localhost:${PORT}`); 
await InitDB()
})

