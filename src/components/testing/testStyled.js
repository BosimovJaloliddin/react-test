import styled, { css } from "styled-components";

export const Container = styled("div")`
  display: flex;
  background-color: yellow;
`;

const getSize = (props) => {
  return {
    large: "200px",
    medium: "150px",
    smoll: "100px",
  }[props.type];
};

export const Box = styled.div`
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: ${getSize};
  height: ${getSize};
  margin: 20px;
  color: green;
  border: 2px solid black;
`;

const common = css`
  font-size: 20px;
  font-weight: 500;
  height: fit-content;
  border: 1px solid red;
  margin: 20px;
  padding: 10px;
`;

export const Title = styled.div`
  ${common}
  border-radius: 7px;
`;
export const Subtitle = styled.div`
  ${common}
  background: ${({ left }) => (left ? "red" : "green")};
  font-size: 12px;
`;
