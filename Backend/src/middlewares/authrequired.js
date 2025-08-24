const jwt = require("jsonwebtoken")

function authrequired(req,res,next) {
    const authHeaders = req.headers["authorization"]
if (!authHeaders) return res.status(401).json({error: "Unauthorized"}) 

    const token = authHeaders.split(" ")[1];
    if (!token) return res.status(401).json({error: "Unauthorized"}) 

        try {
const decoded = jwt.verify(token, "secret")

req.authid = decoded.id

next()
        } catch (err) {
            return res.status(401).json({error: "Unauthorized"}) 
        }
}

module.exports = {
    authrequired
}