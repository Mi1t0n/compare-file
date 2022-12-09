import {IButton} from "../Button/IButton";

interface ILoadingButton extends IButton {
    isLoading: boolean
    BeforeIcon?: JSX.Element
    AfterIcon?: JSX.Element
}

export type {ILoadingButton}