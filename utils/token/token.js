const checkAccessToken = async (access_token) => {
  const check = await fetch(
    `${process.env.NEXT_PUBLIC_API}/users/verify-token`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );
  const responses = await check.json();
  if (responses.error) {
    return false;
  }
  return true;
};

const refreshToken = async (refresh_token, callback) => {
  try {
    const getNewToken = await fetch(
      `${process.env.NEXT_PUBLIC_API}/users/refresh-token`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${refresh_token}`,
        },
        cache: "no-store",
      }
    );
    const responses = await getNewToken.json();
    if (responses.error) {
      throw new Error(responses.message);
    }
    const returnBack = await callback(false, responses.data.access_token);
    return returnBack;
  } catch (error) {
    const returnBack = await callback(error, false);
    return returnBack;
  }
};

export { checkAccessToken, refreshToken };
