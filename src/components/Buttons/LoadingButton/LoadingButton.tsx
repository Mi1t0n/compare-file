import Button from "../Button/Button";
import {ILoadingButton} from "./ILoadingButton";
import styled from "styled-components";

const Flex = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`
const LoadingButton = ({isLoading, BeforeIcon, AfterIcon, ...buttonProps}: ILoadingButton) =>
    <Flex>
        {isLoading && BeforeIcon}
        <Button {...buttonProps}/>
        {isLoading && AfterIcon}
    </Flex>

export default LoadingButton;
