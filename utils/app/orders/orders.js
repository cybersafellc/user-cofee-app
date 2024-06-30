import { getCookie } from "cookies-next";

const getOrders = async (tokenizer) => {
  const get = await fetch(`${process.env.NEXT_PUBLIC_API}/users/orders`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${tokenizer.access_token}`,
    },
    cache: "no-store",
  });
  const resp = await get.json();
  return resp.data;
};

const cancelOrder = async (order_id) => {
  "use client";
  const access_token = getCookie("access_token");
  const cancel = await fetch(
    `${process.env.NEXT_PUBLIC_API}/users/orders/cancel`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        id: order_id,
      }),
    }
  );
  const res = await cancel.json();
  return res;
};

export { getOrders, cancelOrder };
