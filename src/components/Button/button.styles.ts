import { createUseStyles } from 'react-jss';
import color from 'color';

import Theme, { theming } from '../../theme';
import { ButtonProps } from './Button';
import ParseTextColor from '../../utils/ParseTextColor';

interface StyledButtonProps extends ButtonProps {
    themeType: 'dark' | 'light';
}

const stylesheet = (theme: Theme) => ({
    button: ({ themeType }: StyledButtonProps) => ({
        background: theme.colors[themeType].background.primary,
        border: 0,
        borderRadius: 5,
        color: ParseTextColor(theme.colors[themeType].background.primary, theme, themeType),
        cursor: 'pointer',
        padding: 10,
        '&:focus': {
            outline: 'none',
        },
        '&:hover': {
            background: color(theme.colors[themeType].background.primary).darken(0.15).string(),
        },
    }),
});

export const useStyles = createUseStyles(stylesheet, { theming });
