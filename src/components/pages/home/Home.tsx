import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../App";
import { signUp } from "../../../store/actions/auth";
import { ButtonWrapper, Wrapper } from "./Home.styles";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSignUpClick = () => {
    const data = {
      email: email,
      password: password,
    };
    dispatch(signUp(data));
  };

  return (
    <Wrapper>
      <input
        placeholder="email@mail.com"
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
      <ButtonWrapper>
        <button onClick={onSignUpClick}>sign up</button>
        <button onClick={onSignUpClick}>sign in</button>
      </ButtonWrapper>
    </Wrapper>
  );
}
