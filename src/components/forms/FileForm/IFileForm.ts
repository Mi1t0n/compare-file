import {IInputFile} from "../../Inputs/InputFile/IInputFile";

interface IFileForm extends Pick<IInputFile, 'labelText' | 'accept' | 'multiple'> {
    getFileOnChange: (file: File) => void
}

export type {IFileForm}