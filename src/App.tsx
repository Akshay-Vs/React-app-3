import Button from "./components/Button/Button";
import Typography from "./components/Typography/Typography";

const App = () => {
  return (
    <div>
      <Button clickAction={() => alert("Hello")}>
        <Button.Text>Click Me</Button.Text>
      </Button>

      <Button clickAction={() => alert("Hello")} variant="secondary">
        <Button.Text>Click Me</Button.Text>
      </Button>

      <Button clickAction={() => alert("Hello")} variant="disabled">
        <Button.Text>Click Me</Button.Text>
      </Button>

      <Typography>
        <Typography.Heading variant="h1">Welcome to PopX</Typography.Heading>
        <Typography.SubHeading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Typography.SubHeading>
      </Typography>
    </div>
  );
};

export default App;
