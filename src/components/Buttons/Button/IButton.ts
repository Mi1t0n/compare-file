import {appColors} from "../../../GlobalStyled";
import {HTMLProps} from "react";

interface IButton extends HTMLProps<HTMLButtonElement> {
    padding?:string
    margin?:string
    height?:string
    width?:string
    text: string
    textColor: appColors
    bgColor: appColors
    clickHandler?: () => void
}

export type {IButton}