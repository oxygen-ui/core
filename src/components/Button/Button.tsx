import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import { createUseStyles } from 'react-jss';

import Theme, { theming } from '../Theme';

const { useTheme } = theming;

const useStyles = createUseStyles(
    {
        button: {
            background: ({ theme }: { theme: Theme }) => theme.colors.primary,
        },
    },
    { theming }
);

interface IProps extends ComponentPropsWithoutRef<'button'> {
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IProps>(({ children, ...props }, ref) => {
    const theme = useTheme();
    const classes = useStyles({ ...props, theme });

    return (
        <button ref={ref} className={classes.button} {...props}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
