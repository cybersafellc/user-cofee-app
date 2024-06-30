import Container from "../components/Container";
import Form from "../components/login/Form";
import Section from "../components/Section";

export default function Login() {
  return (
    <>
      <Section>
        <Container>
          <div className="py-10 flex flex-col items-center">
            <h1 className="text-2xl mb-4">Sign in</h1>
            <p className="font-light text-gray-700">
              Please enter email and password
            </p>
          </div>
          <Form />
        </Container>
      </Section>
    </>
  );
}
