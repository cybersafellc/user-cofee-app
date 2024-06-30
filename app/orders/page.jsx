import { cookies } from "next/headers";
import NavbarDesktop from "../components/NavbarDesktop";
import Section from "../components/Section";
import Container from "../components/Container";
import NavbarMobile from "../components/NavbarMobile";
import NavMenu from "../components/orders/NavMenu";
import Menu from "../components/orders/Menu";
import CardOrder from "../components/orders/CardOrders";
import { getOrders } from "@/utils/app/orders/orders";
import Footer from "../components/Footer";

export default async function Orders() {
  const cookieStore = cookies();
  const tokenizer = {
    access_token: cookieStore.get("access_token")?.value,
    refresh_token: cookieStore.get("refresh_token")?.value,
  };
  const orders = await getOrders(tokenizer);
  return (
    <>
      <NavbarDesktop {...tokenizer} />
      <Section className="pb-10">
        <Container>
          <Menu />
          <div className="flex flex-col gap-5">
            {orders?.map((order, index) => (
              <>
                {order.product_details ? (
                  <CardOrder key={index + 1} {...order} />
                ) : (
                  ""
                )}
              </>
            ))}
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
