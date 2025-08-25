const URL = "http://localhost:3000";

export async function RegisterReq(user) {
  try {
    const res = await fetch(`${URL}/register`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!res.ok) console.log("!resok");

    const data = await res.json();

    return data;
  } catch (err) {
    throw (err);
  }
}

export async function LoginReq(user) {
  try {
    const res = await fetch(`${URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!res.ok) console.log("!resok");

    const data = await res.json();

    return data;
  } catch (err) {
    throw (err);
  }
}

export async function Verifyreq() {
  try {
    const res = await fetch(`${URL}/verify`, {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) console.log("!resok");

    const data = res.json();

    return data;
  } catch (err) {
    throw err;
  }
}

export async function Logoutreq() {
  try {
    const res = await fetch(`${URL}/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) console.log("!resok");

    const data = await res.json();

    return data;
  } catch (err) {
 throw err;
  }}
