import CarouselAds from "./components/CaroselAds";
import Container from "./components/Container";
import NavbarDesktop from "./components/NavbarDesktop";
import Section from "./components/Section";
import CofeeCard from "./components/CofeeCard";
import Footer from "./components/Footer";
import { product } from "./dumy/product";
import NavbarMobile from "./components/NavbarMobile";
import { cookies } from "next/headers";
import { getProducts } from "@/utils/app/product";
import NavMenu from "./components/NavMenu";

export default async function Home() {
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
          <CarouselAds />
          <div className="mt-5">
            <h5 className="lg:text-xl">New Cofee</h5>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-5">
            {products.map((product, index) => {
              return (
                <>
                  <div className="px-0 py-0" key={index + 1}>
                    <CofeeCard {...product} />
                  </div>
                </>
              );
            })}
          </div>
        </Container>
      </Section>
      <Footer />
      <NavbarMobile>
        <NavMenu />
      </NavbarMobile>
    </>
  );
}
