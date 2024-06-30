"use client";
import { getCookie } from "cookies-next";

const chekout = async (product_id, callback) => {
  try {
    const access_token = getCookie("access_token");
    const postOrder = await fetch(
      `${process.env.NEXT_PUBLIC_API}/users/orders`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify({
          product_id: product_id,
        }),
        cache: "no-store",
      }
    );
    const response = await postOrder.json();
    if (response.error) {
      throw new Error(response.message);
    }
    const returnBack = await callback(false, response);
    return returnBack;
  } catch (error) {
    const returnBack = await callback(error, false);
    return returnBack;
  }
};

export default chekout;
