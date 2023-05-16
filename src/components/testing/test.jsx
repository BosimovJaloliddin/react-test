import React from "react";
import "./test.css";
import { Container, Box, Title, Subtitle } from "./testStyled";
class Test extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Box size="200px" type="large">
            Hellow
          </Box>
          <Box size="150px" type="middle">
            Hellow
          </Box>
          <Box size="100px" type="smoll">
            Hellow
          </Box>
          <Title left="left">Welcom to Webbrain</Title>
          <Subtitle>Welcom</Subtitle>
        </Container>
      </>
    );
  }
}
export default Test;
