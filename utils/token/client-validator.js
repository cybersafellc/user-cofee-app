"use client";

import { checkAccessToken, refreshToken } from "./token";

const { getCookie, deleteCookie, setCookie } = require("cookies-next");

const clientValidator = async (redirect) => {
  const tokenizer = {
    access_token: getCookie("access_token"),
    refresh_token: getCookie("refresh_token"),
  };
  const checkAT = await checkAccessToken(tokenizer.access_token);
  if (!checkAT) {
    const newAccessToken = await refreshToken(
      tokenizer.refresh_token,
      (err, access_token) => {
        return access_token;
      }
    );
    if (!newAccessToken) {
      deleteCookie("access_token");
      deleteCookie("refresh_token");
      redirect.push("/login");
    }
    setCookie("access_token", newAccessToken);
  }
  return;
};

export default clientValidator;
