import React, { forwardRef, ComponentPropsWithoutRef, useContext, CSSProperties } from 'react';
import classNames from 'classnames';

import { ThemeContext, Color, Size } from '../../theme';
import ParseThemeType from '../../utils/ParseThemeType';
import { useStyles } from './Button.styles';
import Spinner from '../Spinner';
import ColorParser from 'color';

export interface ButtonProps {
    block?: boolean;
    className?: string;
    color?: Color;
    disabled?: boolean;
    isLoading?: boolean;
    loadingType?: 'grow' | 'spin';
    size?: Size;
}

type CombinedProps = ButtonProps & ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, CombinedProps>(
    (
        { block, children, className, color, disabled, isLoading, loadingType, size, ...props },
        ref
    ) => {
        const { theme, themeType } = useContext(ThemeContext);
        const classes = useStyles({
            block,
            color,
            disabled,
            isLoading,
            size,
            themeType: ParseThemeType(themeType),
        });

        const loadingStyles: CSSProperties = {
            marginRight: 10,
            width: '0.875em',
            height: '0.875em',
        };
        const parsedLoadingType = loadingType || 'grow';

        if (parsedLoadingType === 'spin') {
            loadingStyles.width = '0.6em';
            loadingStyles.height = '0.6em';
            loadingStyles.borderWidth = 2;
        }

        if (size === 'small' && parsedLoadingType === 'grow') {
            loadingStyles.width = '0.74em';
            loadingStyles.height = '0.74em';
        }

        if (size === 'small' && parsedLoadingType === 'spin') {
            loadingStyles.width = '0.5em';
            loadingStyles.height = '0.5em';
            loadingStyles.borderWidth = 1.5;
        }

        if (size === 'large' && parsedLoadingType === 'grow') {
            loadingStyles.width = '0.95em';
            loadingStyles.height = '0.95em';
        }

        if (size === 'large' && parsedLoadingType === 'spin') {
            loadingStyles.width = '0.65em';
            loadingStyles.height = '0.65em';
            loadingStyles.borderWidth = 3;
        }

        return (
            <button
                ref={ref}
                className={classNames(classes.button, className)}
                disabled={isLoading || disabled}
                {...props}>
                {isLoading && (
                    <Spinner
                        style={loadingStyles}
                        type={parsedLoadingType}
                        color={
                            ColorParser(
                                theme.colors[ParseThemeType(themeType)].background[color || 'light']
                            ).isDark()
                                ? 'light'
                                : 'dark'
                        }
                    />
                )}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
