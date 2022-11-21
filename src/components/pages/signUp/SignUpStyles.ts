import styled from "styled-components";

export const Wrapper = styled.section`
  background: #24265b;
  width: 100%;
  height: 100%;
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
    margin: 0;
    padding: 88px 0 31px;
  }
`;
export const Header = styled.div`
  position: relative;
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    padding: 0;
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    color: #ffffff;
  }
`;
export const BackButton = styled.div`
  height: 44px;
  width: 44px;
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 171px;
  height: 44px;
  background: #3139fa;
  border-radius: 24px;
  border: none;
  float: right;
  margin: 48px 0 0;
  padding: 0 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  tap-highlight-color: transparent;
  -webkit-tap-highlight-color: transparent;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    float: left;
    color: #ffffff;
  }
`;
export const Line = styled.span`
  width: 1px;
  height: 30px;
  background: rgba(31, 36, 155, 0.48);
`;
