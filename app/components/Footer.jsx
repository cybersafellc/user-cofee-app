import Container from "./Container";
import { Typography } from "./material-component";

export default function Footer() {
  return (
    <>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <Container>
          <Typography
            color="blue-gray"
            className="font-normal text-sm text-gray-500"
          >
            &copy; 2024 Develop By Rusnanda Purnama
          </Typography>
        </Container>
      </footer>
    </>
  );
}
