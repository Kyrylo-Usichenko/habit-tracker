import { useNavigate } from "react-router-dom";
import Container from "../../shared/container/Container";
import { socialNetworks } from "./AuthHelper";
import {
  Button,
  Icon,
  List,
  LogIn,
  SignUpButton,
  Title,
  WhiteTop,
  Wrapper,
} from "./AuthStyles";

export default function Auth() {
  const nav = useNavigate();

  const onSignUpClick = () => {
    nav("/signup");
  };
  const onLogInClick = () => {
    nav("/login");
  };

  return (
    <Wrapper>
      <div>
        <WhiteTop />
        <Title>Some Welcome Text ...and Some More</Title>
      </div>
      <Container>
        <List>
          <li>
            <SignUpButton onClick={onSignUpClick}>Sign Up</SignUpButton>
          </li>
          {socialNetworks.map((network) => (
            <li key={network.name}>
              <Button>
                <Icon src={network.icon} />
                <span>Continue with {network.name}</span>
              </Button>
            </li>
          ))}
          <LogIn onClick={onLogInClick}>Log In</LogIn>
        </List>
      </Container>
    </Wrapper>
  );
}
