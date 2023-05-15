import React from "react";
import "./test.css";
import { Container, Box, Title, Subtitle } from "./testStyled";
class Test extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Box bg="white" type="large">
            Large
          </Box>
          <Box bg="red" type="medium">
            Medium
          </Box>
          <Box bg="black" type="smoll">
            Smoll
          </Box>
          <Title>Hi my bro</Title>
          <Subtitle left>Hi my kro</Subtitle>
          <Subtitle state="left">Hi my kro2</Subtitle>
        </Container>
      </>
    );
  }
}
export default Test;
