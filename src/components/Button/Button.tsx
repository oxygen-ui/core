import React, { forwardRef, ComponentPropsWithoutRef, useContext } from 'react';
import classNames from 'classnames';

import { ThemeContext, Color, Size } from '../../theme';
import ParseThemeType from '../../utils/ParseThemeType';
import { useStyles } from './Button.styles';

export interface ButtonProps {
    block?: boolean;
    className?: string;
    color?: Color;
    disabled?: boolean;
    isLoading?: boolean;
    size?: Size;
}

type CombinedProps = ButtonProps & ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, CombinedProps>(
    ({ block, children, className, color, disabled, isLoading, size, ...props }, ref) => {
        const { themeType } = useContext(ThemeContext);
        const classes = useStyles({
            block,
            color,
            disabled,
            isLoading,
            size,
            themeType: ParseThemeType(themeType),
        });

        return (
            <button
                ref={ref}
                className={classNames(classes.button, className)}
                disabled={disabled}
                {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
