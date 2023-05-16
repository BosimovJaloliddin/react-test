import styled, { css } from "styled-components";

export const Container = styled("div")`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

// const getSize = (props) => {
//   return {
//     large: "200px",
//     middle: "150px",
//     smoll: "100px",
//   }[props.type];
// };

const common = css`
  border: 1px solid green;
  color: white;
  background: ${(props) => (props.left === "left" ? "red" : "yellow")};
  width: 400px;
  height: 50px;
`;

export const Box = styled.h1`
  border: 1px solid red;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  ${common}
`;
export const Subtitle = styled("h2")`
  ${common}
`;
