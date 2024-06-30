import CarouselAds from "../components/CaroselAds";
import Container from "../components/Container";
import NavbarDesktop from "../components/NavbarDesktop";
import Section from "../components/Section";
import CofeeCard from "../components/CofeeCard";
import Footer from "../components/Footer";
import { product } from "../dumy/product";
import NavbarMobile from "../components/NavbarMobile";
import { cookies } from "next/headers";
import { getProducts } from "@/utils/app/product";
import Main from "../components/shop/Main";
import NavMenu from "../components/shop/NavMenu";

export default async function Shop() {
  const cookieStoreage = cookies();
  const products = await getProducts();
  const tokenizer = {
    access_token: cookieStoreage.get("access_token")?.value,
    refresh_token: cookieStoreage.get("refresh_token")?.value,
  };
  return (
    <>
      <Section className="text-pdg-100 pb-10">
        <NavbarDesktop {...tokenizer} />
        <Container className="lg:py-5">
          <Main products={products} />
        </Container>
      </Section>
      <Footer />
      <NavbarMobile>
        <NavMenu />
      </NavbarMobile>
    </>
  );
}
