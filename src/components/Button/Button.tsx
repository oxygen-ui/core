import React, { forwardRef, ComponentPropsWithoutRef } from 'react';

import { useStyles, useTheme } from './button.styles';
import { Color } from '../Theme/Colors';
import { Size } from '../Theme/Sizes';

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
        const theme = useTheme();
        const classes = useStyles({ block, color, disabled, isLoading, size, theme });

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
