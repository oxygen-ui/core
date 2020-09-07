import { createUseStyles } from 'react-jss';

import Theme, { theming } from '../../theme';
import { SpinnerProps } from './Spinner';

interface StyledSpinnerProps extends SpinnerProps {
    themeType: 'dark' | 'light';
}

const stylesheet = (theme: Theme) => ({
    '@keyframes spinnerGrow': {
        from: {
            opacity: 1,
            transform: 'scale(0)',
        },
        to: {
            opacity: 0,
            transform: 'scale(1)',
        },
    },
    '@keyframes spinnerRotate': {
        to: { transform: 'rotate(360deg)' },
    },
    spinner: ({ themeType, color, size, speed, type }: StyledSpinnerProps) => {
        const parsedColor = theme.colors[themeType].background[color || 'light'];
        const parsedType = type || 'spin';

        const styles = {
            grow: {
                animationDuration: 1150,
                animationIterationCount: 'infinite',
                animationName: '$spinnerGrow',
                animationTimingFunction: 'ease-in-out',
                background: parsedColor,
                borderRadius: '50%',
                display: 'inline-block',
                height: '3em',
                verticalAlign: 'middle',
                width: '3em',
            },
            spin: {
                animationDuration: 1150,
                animationIterationCount: 'infinite',
                animationName: '$spinnerRotate',
                animationTimingFunction: 'linear',
                borderBottomColor: parsedColor,
                borderLeftColor: parsedColor,
                borderRadius: '50%',
                borderRightColor: parsedColor,
                borderStyle: 'solid',
                borderTopColor: 'transparent',
                borderWidth: 6,
                display: 'inline-block',
                height: '3em',
                verticalAlign: 'middle',
                width: '3em',
            },
        };

        if (size === 'small') {
            styles[parsedType].height = '1.5rem';
            styles[parsedType].width = '1.5rem';

            if (parsedType === 'spin') styles.spin.borderWidth = 4;
        }
        if (size === 'medium') {
            styles[parsedType].height = '3rem';
            styles[parsedType].width = '3rem';

            if (parsedType === 'spin') styles.spin.borderWidth = 6;
        }
        if (size === 'large') {
            styles[parsedType].height = '4.5rem';
            styles[parsedType].width = '4.5rem';

            if (parsedType === 'spin') styles.spin.borderWidth = 8;
        }

        if (speed === 'slow') styles[parsedType].animationDuration = 1610;
        if (speed === 'default') styles[parsedType].animationDuration = 1150;
        if (speed === 'fast') styles[parsedType].animationDuration = 690;

        return styles[parsedType];
    },
});

export const useStyles = createUseStyles(stylesheet, { theming });
