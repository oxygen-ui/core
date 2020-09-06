interface BackgroundColors {
    primary: string;
    secondary: string;
    error: string;
    info: string;
    success: string;
    warning: string;
    light: string;
    dark: string;
}

interface TextColors {
    primary: string;
    secondary: string;
    error: string;
    info: string;
    success: string;
    warning: string;
    light: string;
    dark: string;
    white: string;
    black: string;
}

interface ColorTypes {
    background: BackgroundColors;
    text: TextColors;
}

export default interface Colors {
    light: ColorTypes;
    dark: ColorTypes;
}

export type Color =
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'light'
    | 'dark';
