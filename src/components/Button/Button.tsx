import React, { forwardRef, ComponentPropsWithoutRef, useContext } from 'react';

import { useStyles } from './button.styles';
import { ThemeContext, Color, Size } from '../../theme';
import GetThemeType from '../../utils/GetThemeType';

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
            themeType: GetThemeType(themeType),
        });

        return (
            <button
                ref={ref}
                className={`${classes.button} ${className || ''}`.trim()}
                disabled={disabled}
                {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
