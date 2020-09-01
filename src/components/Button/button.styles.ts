import { createUseStyles } from 'react-jss';
import Theme, { theming } from '../Theme';

const stylesheet = (theme: Theme) => ({
    button: () => ({
        background: theme.colors.light.background.primary,
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

export const { useTheme } = theming;
export const useStyles = createUseStyles(stylesheet, { theming });
