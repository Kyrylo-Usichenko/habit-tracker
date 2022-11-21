import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #3139fa;
  padding: 279px 0 0;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  span {
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    line-height: 54px;
    color: #ffffff;
    position: fixed;
    bottom: 30px;
  }
`;

export const Logo = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
