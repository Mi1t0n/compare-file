import styled from "styled-components";
import FileForm from "../../forms/FileForm/FileForm";
import {Dispatch, SetStateAction, useState} from "react";
import {formattedFile} from "./IComparativeInterface";
import FileEditor from "../../Editor/FileEditor/FileEditor";
import {appColors} from "../../../GlobalStyled";
import useAsync from "../../../hooks/useAsync";
import {compareTwoStrings} from "string-similarity";
import LoadingButton from "../../Buttons/LoadingButton/LoadingButton";
import {MoonLoader} from "react-spinners";


const initFile = {fileGuts: undefined, fileName: undefined}
const CHOOSE_FILE = 'Выберете исходный файл'
const COMPARISON_RESULT = 'Результат совпадения:'
const ANALYZE = 'Проанализировать'

const Main = styled.main`
  padding: 25px 90px;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`
const Result = styled.p`
  color: ${appColors.dark};
`
const Error = styled.p`
  color: ${appColors.red};
`

// const fetchCompare = (fileGuts: string, compareFileGuts: string) => () => fetch(APIendpoints.codeComparator, {
//     mode   : 'no-cors',
//     method : 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body   : JSON.stringify({
//         origin  : fileGuts,
//         reviewer: compareFileGuts
//     })
// })
const fetchCompare = (fileGuts: string, compareFileGuts: string) =>
    () => new Promise<number>(resolve =>
        setTimeout(() => resolve(compareTwoStrings(fileGuts, compareFileGuts) * 100), 3000)
    )

const ComparativeInterface = () => {
    const [file, setFile] = useState<formattedFile>(initFile);
    const [compareFile, setCompareFile] = useState<formattedFile>(initFile);

    const promiseFn = fetchCompare(file.fileGuts || '', compareFile.fileGuts || '')
    const {requestFn, data: result, isLoading, error} = useAsync<number>(promiseFn)

    const fetchСomparisonResult = () => {
        file.fileGuts && compareFile.fileGuts && requestFn()
    }

    const formatFile = (dispatch: Dispatch<SetStateAction<formattedFile>>) =>
        async (file: File) => {
            dispatch({
                fileName: file.name,
                fileGuts: await file.text()
            })
        }

    return (
        <Main>
            <Nav>
                <FileForm getFileOnChange={formatFile(setFile)} labelText={file?.fileName || CHOOSE_FILE}/>
                <FileForm getFileOnChange={formatFile(setCompareFile)}
                          labelText={compareFile?.fileName || CHOOSE_FILE}/>
            </Nav>
            <FileEditor original={file?.fileGuts} modified={compareFile?.fileGuts}/>
            <LoadingButton text={ANALYZE} clickHandler={fetchСomparisonResult}
                           textColor={appColors.white} bgColor={appColors.purpul}
                           padding={'16px 32px'} width={'215px'} margin={'40px 0'}
                           isLoading={isLoading} AfterIcon={<MoonLoader  color={appColors.dark}  size={30}/>}
            />
            {
                result && !isLoading && <Result>{`${COMPARISON_RESULT} ${result.toFixed(2)} %`}</Result>
            }
            {
                error && <Error>{error}</Error>
            }
        </Main>
    )
}

export default ComparativeInterface;
