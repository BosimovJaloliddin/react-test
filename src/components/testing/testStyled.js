import styled, { css, keyframes } from "styled-components";
const rotate = keyframes`
from{
  transform:rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

export const Container = styled.div``;
const common = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  width: 200px;
  height: 40px;
  background: green;
  color: white;
  cursor: pointer;
  margin: 10px;
  &:active {
    transform: scale(0.98);
  }
`;
export const Button = styled.div`
  ${common}
`;
export const ButtonTwo = styled(Button)``;
export const Rotate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: yellow;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;
