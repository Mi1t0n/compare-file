import {createGlobalStyle} from "styled-components";

enum appColors {
    white = '#FFFFFF',
    red = '#FF0000',
    purpul = '#424BB2',
    gray = '#828282',
    dark = '#3D3D3D',
    pure = '#E7ECEF',
}

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  }

  * {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
`


export {appColors}
export default GlobalStyled