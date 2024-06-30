"use client";

import React from "react";
import { Input, Button } from "../material-component";
import CofeeCard from "../CofeeCard";
import { searching } from "@/utils/app/shop/main";

export default function Main(props) {
  const [products, setProducts] = React.useState(props.products);
  const [search, setSearch] = React.useState("");
  const onChange = async ({ target }) => {
    setSearch(target.value);
    const data = await searching(target.value);
    setProducts(data);
  };
  return (
    <>
      <div className="mt-5">
        <div className="relative flex w-full max-w-[600px] mx-auto mb-5">
          <Input
            type="text"
            label="Search"
            value={search}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={search ? "gray" : "blue-gray"}
            disabled={!search}
            className="!absolute right-1 top-1 rounded flex bottom-1 items-center justify-center"
          >
            <i className="bx bx-search-alt-2"></i>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-5">
        {products?.map((product, index) => {
          return (
            <>
              <div className="px-0 py-0" key={index + 1}>
                <CofeeCard {...product} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
