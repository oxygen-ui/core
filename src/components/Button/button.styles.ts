import { createUseStyles } from 'react-jss';
import Theme, { theming } from '../Theme';
import { ButtonProps } from './Button';

const stylesheet = (theme: Theme) => ({
    button: (props: ButtonProps) => ({
        background: props.isLoading ? theme.colors.primary : theme.colors.secondary,
    }),
});

export const { useTheme } = theming;
export const useStyles = createUseStyles(stylesheet, { theming });
