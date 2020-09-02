import { createUseStyles } from 'react-jss';
import Theme, { theming } from '../../theme';
import { ButtonProps } from './Button';

interface StyledButtonProps extends ButtonProps {
    themeType: 'dark' | 'light';
}

const stylesheet = (theme: Theme) => ({
    button: ({ themeType }: StyledButtonProps) => ({
        background: theme.colors[themeType].background.primary,
        border: 0,
        borderRadius: 5,
        color: theme.colors.light.text.light,
        cursor: 'pointer',
        padding: 10,
        '&:focus': {
            outline: 'none',
        },
        '&:hover': {
            background: theme.colors.light.background.secondary,
        },
    }),
});

export const useStyles = createUseStyles(stylesheet, { theming });
