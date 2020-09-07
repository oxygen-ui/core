import { createUseStyles } from 'react-jss';
import Color from 'color';

import Theme, { theming } from '../../theme';
import { ButtonProps } from './Button';
import ParseTextColor from '../../utils/ParseTextColor';

interface StyledButtonProps extends ButtonProps {
    themeType: 'dark' | 'light';
}

const stylesheet = (theme: Theme) => ({
    button: ({ themeType, block, color, disabled, size }: StyledButtonProps) => {
        let parsedColor = theme.colors[themeType].background[color || 'light'];

        const styles = {
            background: parsedColor,
            border: 0,
            borderRadius: 5,
            color: ParseTextColor(parsedColor, theme, themeType),
            cursor: 'pointer',
            fontSize: 'inherit',
            padding: 10,
            width: 'auto',
            '&:focus': {
                outline: 0,
                boxShadow: `0 0 0 0.2rem ${Color(parsedColor).fade(0.5).string()}`,
            },
            '&:hover': {
                background: Color(parsedColor).darken(0.08).string(),
            },
            transition: ['background', 'box-shadow'],
            transitionDuration: 175,
            transitionTimingFunction: 'ease-in-out',
        };

        if (block) styles.width = '100%';
        if (disabled) {
            parsedColor = Color(parsedColor).fade(0.25).string();
            styles.background = parsedColor;
            styles.cursor = 'not-allowed';
            styles['&:hover'] = { background: parsedColor };
            styles['&:focus'] = { outline: 0, boxShadow: '0' };
        }
        if (size === 'small') {
            styles.fontSize = '0.775rem';
            styles.padding = 8;
        }
        if (size === 'medium') {
            styles.fontSize = 'inherit';
            styles.padding = 10;
        }
        if (size === 'large') {
            styles.fontSize = '1.25rem';
            styles.padding = 12;
        }

        return styles;
    },
});

export const useStyles = createUseStyles(stylesheet, { theming });
