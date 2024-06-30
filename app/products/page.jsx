import Container from "../components/Container";
import Section from "../components/Section";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import React from "react";
import Main from "../components/products/Main";
import { getProduct } from "@/utils/app/products/main";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import NavMenu from "../components/products/NavMenu";

export default async function Products({ searchParams }) {
  const cookieStoreage = cookies();
  const productId = await searchParams.id;
  if (!productId) return notFound();
  const tokenizer = {
    access_token: cookieStoreage.get("access_token")?.value,
    refresh_token: cookieStoreage.get("refresh_token")?.value,
  };
  const product = await getProduct(productId, (error, product) => {
    if (error) return false;
    return product;
  });
  if (!product) return notFound();
  return (
    <>
      <Section>
        <NavbarDesktop {...tokenizer} />
        <Container className="lg:pt-20 pb-5">
          <Main {...product} />
        </Container>
      </Section>
      <NavbarMobile>
        <NavMenu />
      </NavbarMobile>
    </>
  );
}
