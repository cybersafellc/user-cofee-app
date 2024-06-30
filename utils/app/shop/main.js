const searching = async (query) => {
  const search = await fetch(
    `${process.env.NEXT_PUBLIC_API}/products?q=${query}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  const searchs = await search.json();
  return searchs.data;
};

export { searching };
