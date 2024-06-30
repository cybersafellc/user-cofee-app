const signup = async (form, callback) => {
  try {
    const signupExe = await fetch(`${process.env.NEXT_PUBLIC_API}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
      cache: "no-store",
    });
    const response = await signupExe.json();
    if (response.error) throw new Error(response.message);
    const res = await callback(false, response);
    return res;
  } catch (error) {
    const res = await callback(error, false);
    return res;
  }
};

export default signup;
