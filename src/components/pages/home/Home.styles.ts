import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0;
  max-width: 250px;
  width: 100%;
  margin: 0 auto;
  input {

    width: 100%;
    border: 1px solid black;
    padding: 5px 10px;
    margin: 0 0 15px;
    z-index: 0;
    &:focus {
      outline: none;
    }
  }
 
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  button {
    width: 100%;
    margin: 0 0 10px;
  }
`;
