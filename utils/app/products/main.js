const getProduct = async (id, callback) => {
  try {
    const get = await fetch(
      `${process.env.NEXT_PUBLIC_API}/products?id=${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );
    const response = await get.json();
    if (response.error) throw new Error(response.message);
    const returnBack = await callback(false, response.data);
    return returnBack;
  } catch (error) {
    const returnBack = await callback(error, false);
    return returnBack;
  }
};

export { getProduct };
