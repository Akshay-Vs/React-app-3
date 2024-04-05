import { useState } from "react";
import TakeInput from "../../components/Input/Input";
import Typography from "../../components/Typography";
import Button from "../../components/Button";

type Credentials = {
  username?: string | undefined;
  password?: string | undefined;
};

const LoginPage = () => {
  const [credentials, setCredentials] = useState<Credentials>();
  //   const [error, setError] = useState<string>();
  const [buttonState, setButtonState] = useState<
    "disabled" | "enabled" | "loading"
  >("disabled");

  const handlecredentialsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log(credentials);
    if (credentials?.password) setButtonState("enabled");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="flex flex-col items-center justify-start h-screen w-screen pt-12">
      <form className="flex flex-col">
        <Typography>
          <Typography.Heading variant="h1">Welcome to PopX</Typography.Heading>
          <Typography.SubHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Typography.SubHeading>
        </Typography>

        <TakeInput>
          <TakeInput.TextInput
            props={{
              placeholder: "Enter Email Address",
              type: "email",
              autoComplete: "email",
              autoFocus: true,
              required: true,
              onChange: handlecredentialsChange,
              value: credentials?.username,
            }}
          >
            Email Address
          </TakeInput.TextInput>
        </TakeInput>

        <TakeInput>
          <TakeInput.TextInput
            props={{
              placeholder: "Enter Password",
              type: "password",
              autoComplete: "current-password",
              required: true,
              onChange: handlecredentialsChange,
              value: credentials?.password,
            }}
          >
            Password
          </TakeInput.TextInput>
        </TakeInput>

        <Button variant={buttonState === "disabled" ? "disabled" : "primary"}>
          <Button.Text>Login</Button.Text>
        </Button>
      </form>
    </main>
  );
};

export default LoginPage;
