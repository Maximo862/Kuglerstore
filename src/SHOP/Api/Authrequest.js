const URL = "http://localhost:3000"

export async function RegisterReq(user) {
try {
    const res = await fetch(`${URL}/register`, {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(user)
    })

    if (!res.ok) throw new Error("!resok");
     
const data = await res.json()
    
return data
} catch (err) {
     throw new Error(err)
}
}


export async function LoginReq(user) {
try {
const res = await fetch(`${URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(user)
})

if (!res.ok) throw new Error("!resok");
 
const data = await res.json()

return data

} catch (err) {
   throw new Error(err)
} 
}

