import React from "react";
import { Button, ButtonTwo, Rotate } from "./testStyled";

import { ThemeProvider, createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
  background:${(props) => props.theme.bg} ;
  color:${(props) => props.theme.cl} ;
}
`;
class Test extends React.Component {
  state = {
    light: true,
  };
  render() {
    const theme = {
      bg: this.state.light ? "white" : "black",
      cl: this.state.light ? "black" : "white",
    };
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Button onClick={() => this.setState({ light: !this.state.light })}>
            Button
          </Button>
          <ButtonTwo>ButtonTwo</ButtonTwo>
          <Rotate>Rotate</Rotate>
        </ThemeProvider>
      </>
    );
  }
}
export default Test;
