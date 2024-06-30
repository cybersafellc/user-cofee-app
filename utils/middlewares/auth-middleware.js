import { NextResponse } from "next/server";
import { checkAccessToken, refreshToken } from "../token/token";

const authMiddleware = async (request) => {
  const cookies = {
    access_token: request.cookies.get("access_token")?.value,
    refresh_token: request.cookies.get("refresh_token")?.value,
  };
  const checkAT = await checkAccessToken(cookies.access_token);
  if (!checkAT) {
    const newAccessToken = await refreshToken(
      cookies.refresh_token,
      (err, access_token) => {
        return access_token;
      }
    );
    if (!newAccessToken) {
      const responses = NextResponse.redirect(new URL("/login", request.url));
      responses.cookies.delete("access_token");
      responses.cookies.delete("refresh_token");
      return responses;
    }
    const responses = NextResponse.next();
    responses.cookies.set("access_token", newAccessToken);
    return responses;
  }
  return NextResponse.next();
};

export default authMiddleware;
