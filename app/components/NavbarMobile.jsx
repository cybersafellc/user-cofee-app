import Container from "./Container";

export default function NavbarMobile({ children }) {
  return (
    <>
      <nav className="sticky bottom-0 right-0 left-0 lg:hidden bg-white shadow border py-2">
        <Container>{children}</Container>
      </nav>
    </>
  );
}
