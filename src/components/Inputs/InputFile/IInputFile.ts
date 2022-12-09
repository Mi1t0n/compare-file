import {ChangeEvent} from "react";

interface IInputFile {
    fileChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    accept?: string
    labelText?: string
    multiple?: boolean
}

export type {IInputFile}