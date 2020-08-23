import React, { forwardRef, ComponentPropsWithoutRef } from 'react';

import { useStyles, useTheme } from './button.styles';

export interface ButtonProps {
    isLoading?: boolean;
}

type CombinedProps = ButtonProps & ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, CombinedProps>(
    ({ children, isLoading, ...props }, ref) => {
        const theme = useTheme();
        const classes = useStyles({ isLoading, theme });

        return (
            <button ref={ref} className={classes.button} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
