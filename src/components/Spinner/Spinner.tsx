import React, { forwardRef, ComponentPropsWithoutRef, useContext } from 'react';
import classNames from 'classnames';

import { Color, Size, ThemeContext } from '../../theme';
import { useStyles } from './Spinner.styles';
import ParseThemeType from '../../utils/ParseThemeType';

export interface SpinnerProps {
    className?: string;
    color?: Color;
    size?: Size;
    speed?: 'slow' | 'default' | 'fast';
    type?: 'grow' | 'spin';
}

type CombinedProps = SpinnerProps & ComponentPropsWithoutRef<'span'>;

const Spinner = forwardRef<HTMLSpanElement, CombinedProps>(
    ({ className, color, size, speed, type, ...props }, ref) => {
        const { themeType } = useContext(ThemeContext);
        const classes = useStyles({
            color,
            size,
            speed,
            type,
            themeType: ParseThemeType(themeType),
        });

        return (
            <span ref={ref} className={classNames(classes.spinner, className)} {...props}></span>
        );
    }
);

Spinner.displayName = 'Spinner';

export default Spinner;
