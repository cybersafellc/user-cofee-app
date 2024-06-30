import Section from "./components/Section";

export default function Loading() {
  return (
    <>
      <Section className="flex justify-center items-center">
        <span className="text-black">
          Loading <i class="bx bxs-coffee-bean"></i>
        </span>
      </Section>
    </>
  );
}
