import React, { forwardRef, ComponentPropsWithoutRef } from 'react';

interface IProps extends ComponentPropsWithoutRef<'button'> {
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IProps>(({ children, ...props }, ref) => (
    <button ref={ref} {...props}>
        {children}
    </button>
));

Button.displayName = 'Button';

export default Button;
