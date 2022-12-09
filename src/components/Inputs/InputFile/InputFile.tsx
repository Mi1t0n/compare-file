import {IInputFile} from "./IInputFile";
import styled from "styled-components";
import {appColors} from "../../../GlobalStyled";
import {forwardRef} from "react";

const Label = styled.label`
  color: ${appColors.gray};
  cursor: pointer;
  border-right: 1px ${appColors.gray} solid;
  border-radius: 3px 0 0 3px;
  padding: 14px 30px;
`
const HiddenInput = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0
`

const InputFile = forwardRef<HTMLInputElement, IInputFile>(({accept, multiple, fileChangeHandler, labelText}, ref) =>
    <Label>
        {labelText}
        <HiddenInput type="file" onChange={fileChangeHandler} accept={accept} multiple={multiple} ref={ref}
                     tabIndex={-1}/>
    </Label>
)


export default InputFile;
