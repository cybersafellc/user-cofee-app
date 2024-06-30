export default function Section({ children, className }) {
  return (
    <>
      <section className={"w-full min-h-screen mx-auto " + className}>
        {children}
      </section>
    </>
  );
}
