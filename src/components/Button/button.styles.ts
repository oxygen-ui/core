import { createUseStyles } from 'react-jss';
import Color from 'color';

import Theme, { theming } from '../../theme';
import { ButtonProps } from './Button';
import ParseTextColor from '../../utils/ParseTextColor';

interface StyledButtonProps extends ButtonProps {
    themeType: 'dark' | 'light';
}

const stylesheet = (theme: Theme) => ({
    button: ({ themeType, color, block }: StyledButtonProps) => {
        const parsedColor = theme.colors[themeType].background[color || 'light'];

        const styles = {
            background: parsedColor,
            border: 0,
            borderRadius: 5,
            color: ParseTextColor(parsedColor, theme, themeType),
            cursor: 'pointer',
            padding: 10,
            width: 'auto',
            '&:focus': {
                outline: 0,
                boxShadow: `0 0 0 0.2rem ${Color(parsedColor).fade(0.5).string()}`,
            },
            '&:hover': {
                background: Color(parsedColor).darken(0.08).string(),
            },
        };

        if (block) styles.width = '100%';

        return styles;
    },
});

export const useStyles = createUseStyles(stylesheet, { theming });
