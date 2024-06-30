"use client";

const login = async (form, callback) => {
  try {
    const login = await fetch(`${process.env.NEXT_PUBLIC_API}/users/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const resp = await login.json();
    if (resp.error) throw new Error(resp.message);
    const res = await callback(false, resp);
    return res;
  } catch (error) {
    const res = await callback(error, false);
    return res;
  }
};

export { login };
