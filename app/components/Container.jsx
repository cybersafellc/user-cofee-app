export default function Container({ children, className }) {
  return (
    <>
      <div className={"max-w-[765px] mx-auto px-4 " + className}>
        {children}
      </div>
    </>
  );
}
