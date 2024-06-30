import Container from "../components/Container";
import Section from "../components/Section";
import Form from "../components/signup/Form";

export default function Signup() {
  return (
    <>
      <Section>
        <Container>
          <div className="py-10 flex flex-col items-center">
            <h1 className="text-2xl mb-4">Sign up</h1>
            <p className="font-light text-gray-700">
              Register first before using the app
            </p>
          </div>
          <Form />
        </Container>
      </Section>
    </>
  );
}
