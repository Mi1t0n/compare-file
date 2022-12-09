import styled from "styled-components";
import {appColors} from "../../../GlobalStyled";
import BackPageButton from "../../Buttons/BackPageButton/BackPageButton";

const UnderLine = styled.div`
  border-bottom: 1px ${appColors.gray} solid;
`
const HeaderStyle = styled.header`
  color: ${appColors.gray};
  
`
const Title = styled.h4`
  color: ${appColors.gray};
  padding: 26px 90px ;
`
const Header = () =>
    <HeaderStyle>
        <UnderLine>
            <Title>Сравнение исходного кода</Title>
        </UnderLine>
        <nav>
            <BackPageButton text={'<= Назад'}/>
        </nav>
    </HeaderStyle>

export default Header;
