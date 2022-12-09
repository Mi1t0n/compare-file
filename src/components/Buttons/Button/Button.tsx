import {IButton} from "./IButton";
import styled from "styled-components";

const ButtonStyled = styled.button<Pick<IButton, 'bgColor' | 'textColor' | 'padding' | 'width' | 'height' | 'margin'>>`
  cursor: pointer;
  border: none;
  font-size: 16px;
  line-height: 19px;
  transition: font-size .1s ease-in-out, opacity .2s ease-in-out;
  border-radius: 2px;
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  color: ${({textColor}) => textColor};
  width: ${({width}) => width};
  height: ${({height}) => height};

  &:hover {
    font-size: 18px;
  }

  &:active {
    font-size: 14px;
  }

  &:disabled {
    font-size: 16px;
    opacity: .6;
    cursor: not-allowed;
  }

  background-color: ${({bgColor}) => bgColor};
`
const Button = ({text, bgColor, textColor, clickHandler, padding, margin, height, width}: IButton) =>
    <ButtonStyled onClick={clickHandler} bgColor={bgColor} textColor={textColor} padding={padding} height={height}
                  width={width} margin={margin}>
        {text}
    </ButtonStyled>

export default Button;
