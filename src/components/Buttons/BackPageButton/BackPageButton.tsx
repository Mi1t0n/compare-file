import styled from "styled-components";
import {appColors} from "../../../GlobalStyled";
import {IBackPageButton} from "./IBackPageButton";


const Button = styled.button`
  border: none;
  color: ${appColors.gray};
  cursor: pointer;
  margin: 26px 90px ;
  background: ${appColors.white};
  &:hover{
    text-decoration: underline;
  }
`

const BackPageButton = ({text}: IBackPageButton) =>
    <Button>
        {text}
    </Button>

export default BackPageButton;
