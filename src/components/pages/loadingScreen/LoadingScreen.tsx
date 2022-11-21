import { Inner, Logo, Wrapper } from "./LoadingScreenStyles";

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Inner>
        <Logo />
        <span>HabitCocker</span>
      </Inner>
    </Wrapper>
  );
}
