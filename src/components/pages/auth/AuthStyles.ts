import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #24265b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;
export const WhiteTop = styled.div`
  width: 100%;
  height: 197px;
  background-color: #fff;
  border-radius: 0px 0px 24px 24px;
  margin: 0 0 18px;
  @media (min-height: 800px) {
    height: 286px;
    margin: 0 0 22px;
  }
  @media (min-height: 844px) {
    height: 345px;
    margin: 0 0 22px;
  }
  @media (min-height: 900px) {
    height: 365px;
    margin: 0 0 31px;
  }
`;
export const Title = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
  width: 100%;
  max-width: 302px;
  margin: 0 auto;
  text-align: center;
  margin: 0 auto 20px;
  @media (min-height: 800px) {
    margin: 0 auto 74px;
  }
  @media (min-height: 844px) {
    margin: 0 auto 59px;
  }
  @media (min-height: 900px) {
    margin: 0 auto 96px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: #24265b;
  padding: 0 0 34px 0;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  li {
    margin: 0 0 25px 0;
    width: 100%;
    text-align: center;
    &:last-child {
      margin: 0;
      width: unset;
    }
  }
`;
export const LogIn = styled.li`
  font-style: normal;
  text-align: center;
  color: #ffffff;
`;
export const SignUpButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 24px;
  background: #3139fa;
  border: none;
  font-style: normal;
  color: #ffffff;
`;
export const Button = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 24px;
  background: none;
  border: none;
  font-style: normal;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.56);
  position: relative;
  span {
    
  }
`;
export const Icon = styled.img`
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
`;
