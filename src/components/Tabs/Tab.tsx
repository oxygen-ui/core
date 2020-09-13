import React, { forwardRef, ComponentPropsWithoutRef, ReactNode } from 'react';
import classNames from 'classnames';

export interface TabProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
    disabled?: boolean;
    id: string;
    title: string;
}

const Tab = forwardRef<HTMLDivElement, TabProps>(({ className, children, ...props }, ref) => {
    return (
        <div ref={ref} className={classNames(className)} {...props}>
            {children}
        </div>
    );
});

Tab.displayName = 'Tab';

export default Tab;
