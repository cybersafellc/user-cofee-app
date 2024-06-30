const getProducts = async () => {
  const get = await fetch(`${process.env.NEXT_PUBLIC_API}/products`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const responses = await get.json();
  return responses.data;
};

export { getProducts };
