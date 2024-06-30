import { setCookie } from "cookies-next";
import { checkAccessToken, refreshToken } from "../token/token";

const statusLogin = async ({ access_token, refresh_token }) => {
  const checkAccessTokens = await checkAccessToken(access_token);
  if (!checkAccessTokens) {
    const refreshTokenRes = await refreshToken(
      refresh_token,
      (err, access_token) => {
        return access_token;
      }
    );
    if (!refreshTokenRes) return false;
    setCookie("access_token", refreshTokenRes);
  }
  return true;
};
export default statusLogin;
