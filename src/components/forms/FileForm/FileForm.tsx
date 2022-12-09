import InputFile from "../../Inputs/InputFile/InputFile";
import Button from "../../Buttons/Button/Button";
import {appColors} from "../../../GlobalStyled";
import {ChangeEvent, useRef} from "react";
import styled from "styled-components";
import {IFileForm} from "./IFileForm";


const Form = styled.div`
  border: 1px ${appColors.gray} solid;
  border-radius: 3px;
  width: 625px;
  display: inline-grid;
  grid-template-columns: 1fr 135px;
  align-items: center;
`
const FileForm = ({getFileOnChange, labelText, multiple, accept}: IFileForm) => {
    const fileInput = useRef<HTMLInputElement | null>(null)
    const fileChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (!files?.length) return

        const file = files[0]
        getFileOnChange(file)
    }
    const openInput = () => fileInput.current?.click()

    return (
        <Form>
            <InputFile fileChangeHandler={fileChangeHandler} ref={fileInput}
                       labelText={labelText} multiple={multiple} accept={accept}/>
            <Button text={'Выбрать'}
                    padding={'13px 0'} bgColor={appColors.pure} textColor={appColors.gray}
                    clickHandler={openInput}
            />
        </Form>
    )
}

export default FileForm;
