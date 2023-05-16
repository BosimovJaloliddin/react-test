import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;
export const Container = styled("div")`
  margin: 40px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  background: green;
  color: white;
  border-radius: 10px;
  margin: 10px;
  &:active {
    transform: scale(0.97);
  }
`;

export const ActiveButton = styled(Button)``;
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
