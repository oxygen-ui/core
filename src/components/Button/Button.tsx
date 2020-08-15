import React, { forwardRef, ComponentPropsWithoutRef } from 'react';

const Button = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'>>(
    ({ children, ...props }, ref) => (
        <button ref={ref} {...props}>
            {children}
        </button>
    )
);

Button.displayName = 'Button';

export default Button;
