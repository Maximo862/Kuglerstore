const URL = "http://localhost:3000";

export async function RegisterReq(user) {
  try {
    const res = await fetch(`${URL}/register`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (!res.ok) throw data;

    return data;
  } catch (err) {
    throw err;
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

    const data = await res.json();

    if (!res.ok) throw data;

    return data;
  } catch (err) {
    throw err;
  }
}

export async function Verifyreq() {
  try {
    const res = await fetch(`${URL}/verify`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) throw data;

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

    const data = await res.json();

    if (!res.ok) throw data;

    return data;
  } catch (err) {
    throw err;
  }
}
